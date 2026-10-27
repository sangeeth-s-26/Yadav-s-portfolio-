import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BlueprintAnimation = () => {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState('architectural');
  const [currentStepName, setCurrentStepName] = useState('MODE: 3D ARCHITECTURAL RENDER');
  
  // References for three.js objects across renders
  const animationRef = useRef({
    setMode: null,
  });

  const stateRef = useRef({
    hovered: false,
    scrollY: 0
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(22, 16, 26);
    camera.lookAt(0, 4.5, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.4);
    mainSun.position.set(25, 40, 20);
    mainSun.castShadow = true;
    mainSun.shadow.mapSize.width = 1024;
    mainSun.shadow.mapSize.height = 1024;
    scene.add(mainSun);

    const blueFill = new THREE.PointLight(0x0284c7, 1.5, 50);
    blueFill.position.set(-15, 15, -15);
    scene.add(blueFill);

    const cyanFill = new THREE.PointLight(0x06b6d4, 1.0, 40);
    cyanFill.position.set(15, 10, 15);
    scene.add(cyanFill);

    // 5. Grid and Ground (Subtle Architectural Grid)
    const gridHelper = new THREE.GridHelper(36, 36, 0x0284c7, 0x334155);
    gridHelper.position.y = 0;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 6. Main Building Group
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Materials Palette (Premium Engineering Aesthetic)
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5, metalness: 0.1 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.6 });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.5,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.6,
      reflectivity: 0.8,
    });
    const bimWireMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true, transparent: true, opacity: 0.7 });
    const cadLineMat = new THREE.LineBasicMaterial({ color: 0x0ea5e9, linewidth: 2, transparent: true, opacity: 0.8 });
    
    const elements = {
      slabs: [],
      columns: [],
      beams: [],
      glass: [],
      wireframes: []
    };

    // Foundation
    const padGeo = new THREE.BoxGeometry(12, 0.4, 10);
    const foundationPad = new THREE.Mesh(padGeo, concreteMat);
    foundationPad.position.set(0, 0.2, 0);
    foundationPad.receiveShadow = true;
    buildingGroup.add(foundationPad);

    // Structural Core Axis
    const coreGeo = new THREE.BoxGeometry(3.5, 11.8, 3);
    const coreMesh = new THREE.Mesh(coreGeo, steelMat);
    coreMesh.position.set(-2, 6, -1);
    coreMesh.castShadow = true;
    buildingGroup.add(coreMesh);
    elements.columns.push(coreMesh);

    // Building Structure (Multi-Story)
    const floorLevels = [0.4, 3.8, 7.2, 10.6];
    floorLevels.forEach((yPos, idx) => {
      // Slab
      const slabGeo = new THREE.BoxGeometry(11.4, 0.35, 9.4);
      const slab = new THREE.Mesh(slabGeo, concreteMat);
      slab.position.set(0, yPos, 0);
      slab.castShadow = true;
      slab.receiveShadow = true;
      buildingGroup.add(slab);
      elements.slabs.push(slab);

      // Wireframe overlay for slab
      const slabWire = new THREE.Mesh(slabGeo, bimWireMat);
      slabWire.position.set(0, yPos, 0);
      slabWire.visible = false;
      buildingGroup.add(slabWire);
      elements.wireframes.push(slabWire);

      if (idx < 3) {
        // Columns
        const colPos = [
          [-5, -4], [-1, -4], [3, -4], [5, -4],
          [-5,  4], [-1,  4], [3,  4], [5,  4],
        ];
        colPos.forEach(([x, z]) => {
          const colGeo = new THREE.BoxGeometry(0.45, 3.05, 0.45);
          const col = new THREE.Mesh(colGeo, steelMat);
          col.position.set(x, yPos + 1.7, z);
          col.castShadow = true;
          buildingGroup.add(col);
          elements.columns.push(col);

          const colWire = new THREE.Mesh(colGeo, bimWireMat);
          colWire.position.set(x, yPos + 1.7, z);
          colWire.visible = false;
          buildingGroup.add(colWire);
          elements.wireframes.push(colWire);
        });

        // Perimeter Beams
        const beam1 = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.35, 0.35), steelMat);
        beam1.position.set(0, yPos + 3.22, -4);
        buildingGroup.add(beam1);
        elements.beams.push(beam1);

        const beam2 = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.35, 0.35), steelMat);
        beam2.position.set(0, yPos + 3.22, 4);
        buildingGroup.add(beam2);
        elements.beams.push(beam2);

        // Glass Panels
        const glassGeo = new THREE.BoxGeometry(11.0, 2.9, 9.0);
        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.set(0, yPos + 1.7, 0);
        buildingGroup.add(glass);
        elements.glass.push(glass);
      }
    });

    // Roof Truss Element
    const crownGeo = new THREE.BoxGeometry(10.8, 1.2, 8.8);
    const crownMesh = new THREE.Mesh(crownGeo, steelMat);
    crownMesh.position.set(0, 11.4, 0);
    buildingGroup.add(crownMesh);
    elements.columns.push(crownMesh);

    const crownWire = new THREE.Mesh(crownGeo, bimWireMat);
    crownWire.position.set(0, 11.4, 0);
    crownWire.visible = false;
    buildingGroup.add(crownWire);
    elements.wireframes.push(crownWire);

    // CAD Lines / Blueprint Drafting Lines
    const cadGroup = new THREE.Group();
    const cadGeo = new THREE.BufferGeometry();
    const cadCoords = new Float32Array([
      -6, 0.05, -5,   6, 0.05, -5,
       6, 0.05, -5,   6, 0.05,  5,
       6, 0.05,  5,  -6, 0.05,  5,
      -6, 0.05,  5,  -6, 0.05, -5,
      -6, 0.05,  0,   6, 0.05,  0,
       0, 0.05, -5,   0, 0.05,  5,
      -7, 0.05, -5,  -7, 0.05,  5,
      -7.2, 0.05, -5, -6.8, 0.05, -5,
      -7.2, 0.05, 5, -6.8, 0.05, 5
    ]);
    cadGeo.setAttribute('position', new THREE.BufferAttribute(cadCoords, 3));
    const cadLines = new THREE.LineSegments(cadGeo, cadLineMat);
    cadGroup.add(cadLines);
    cadGroup.visible = false;
    scene.add(cadGroup);
    
    // Rotating BIM/CAD Technical Indicator
    const indicatorGroup = new THREE.Group();
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const indicatorWire = new THREE.Mesh(icosahedronGeo, new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.8 }));
    indicatorGroup.add(indicatorWire);
    
    const ringGeo = new THREE.RingGeometry(1.6, 1.7, 32);
    const ringMesh = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x0284c7, side: THREE.DoubleSide, transparent: true, opacity: 0.6 }));
    ringMesh.rotation.x = Math.PI / 2;
    indicatorGroup.add(ringMesh);
    
    indicatorGroup.position.set(9, 10, 6);
    buildingGroup.add(indicatorGroup);
    
    // Mode Switcher Logic
    animationRef.current.setMode = (mode) => {
      setActiveMode(mode);
      
      const resetVisibility = () => {
        buildingGroup.visible = true;
        cadGroup.visible = false;
        elements.slabs.forEach(el => el.visible = true);
        elements.columns.forEach(el => el.visible = true);
        elements.beams.forEach(el => el.visible = true);
        elements.glass.forEach(el => el.visible = true);
        elements.wireframes.forEach(el => el.visible = false);
      };

      if (mode === 'architectural') {
        resetVisibility();
        setCurrentStepName('MODE: ARCHITECTURAL 3D MODEL');
      } else if (mode === 'structural') {
        resetVisibility();
        elements.glass.forEach(el => el.visible = false);
        elements.slabs.forEach(el => el.visible = false);
        elements.wireframes.forEach(el => el.visible = true);
        setCurrentStepName('MODE: STRUCTURAL WIREFRAME');
      } else if (mode === 'bim') {
        resetVisibility();
        elements.wireframes.forEach(el => el.visible = true);
        setCurrentStepName('MODE: BIM MODEL (LOD 350)');
      } else if (mode === 'cad') {
        resetVisibility();
        buildingGroup.visible = false;
        cadGroup.visible = true;
        setCurrentStepName('MODE: CAD TECHNICAL VIEW');
      }
    };

    // Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (e.clientY - rect.top) / container.clientHeight - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll
    const handleScroll = () => {
      stateRef.current.scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    let animFrameId;
    let clock = new THREE.Clock();
    let currentGlow = 1.5;
    let currentRotationSpeed = 0.15;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      
      const hovered = stateRef.current.hovered;
      const targetGlow = hovered ? 2.5 : 1.5;
      const targetSpeed = hovered ? 0.35 : 0.15;
      
      currentGlow += (targetGlow - currentGlow) * 0.05;
      currentRotationSpeed += (targetSpeed - currentRotationSpeed) * 0.05;

      blueFill.intensity = currentGlow;

      // Base smooth continuous 360 loop rotation
      buildingGroup.rotation.y += currentRotationSpeed * 0.016; 
      cadGroup.rotation.y = buildingGroup.rotation.y;
      
      // Floating indicator rotation
      indicatorWire.rotation.x = elapsed * 0.5;
      indicatorWire.rotation.y = elapsed * 0.7;
      ringMesh.rotation.z = elapsed * 0.3;
      indicatorGroup.position.y = 10 + Math.sin(elapsed * 2) * 0.5;

      // Smooth scroll-based animation & Parallax effect
      const scrollOffset = stateRef.current.scrollY * 0.015;
      camera.position.x += ((22 + mouseX * 2) - camera.position.x) * 0.05;
      camera.position.y += ((16 + mouseY * 2 - scrollOffset) - camera.position.y) * 0.05;
      camera.lookAt(0, 4.5 - scrollOffset * 0.2, 0);

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="position-relative w-100 h-100 min-h-450 d-flex flex-column justify-content-center align-items-center"
      onPointerEnter={() => stateRef.current.hovered = true}
      onPointerLeave={() => stateRef.current.hovered = false}
      style={{ touchAction: 'pan-y' }}
    >
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-100 h-100 position-relative"
        style={{ minHeight: '520px', cursor: 'grab' }}
      ></div>

      {/* Floating Technical Labels (Responsive & Smooth) */}
      <div className="position-absolute top-0 start-0 m-2 m-md-3 p-1.5 p-md-2 bg-white/90 backdrop-blur-md rounded-2 border border-slate-200 shadow-sm animation-float-slow d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="fw-bold text-primary font-monospace" style={{ fontSize: '0.7rem' }}>BIM MODEL</div>
      </div>
      
      <div className="position-absolute top-10 end-0 m-2 m-md-3 p-1.5 p-md-2 bg-slate-900 text-info backdrop-blur-md rounded-2 border border-slate-700 shadow-sm animation-float-delayed d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="fw-bold font-monospace" style={{ fontSize: '0.7rem' }}>STRUCTURAL FRAME</div>
      </div>
      
      <div className="position-absolute bottom-20 start-0 m-2 m-md-3 p-1.5 p-md-2 bg-white/90 backdrop-blur-md rounded-2 border border-slate-200 shadow-sm animation-float d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="fw-bold text-dark font-monospace" style={{ fontSize: '0.7rem' }}>3D VISUALIZATION</div>
      </div>
      
      <div className="position-absolute bottom-10 end-0 m-2 m-md-3 p-1.5 p-md-2 bg-primary/10 text-primary backdrop-blur-md rounded-2 border border-primary/20 shadow-sm animation-float-slow d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="fw-bold font-monospace" style={{ fontSize: '0.7rem' }}>CAD</div>
      </div>
      
      <div className="position-absolute top-50 start-0 ms-1 ms-md-2 p-1 bg-white/80 backdrop-blur-sm rounded border border-slate-200 shadow-sm animation-float-delayed d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="text-secondary font-monospace" style={{ fontSize: '0.65rem' }}>LEVEL 03</div>
      </div>
      
      <div className="position-absolute top-50 end-0 me-1 me-md-2 p-1 bg-white/80 backdrop-blur-sm rounded border border-slate-200 shadow-sm animation-float d-none d-sm-block" style={{ zIndex: 10 }}>
        <div className="text-secondary font-monospace" style={{ fontSize: '0.65rem' }}>ELEVATION +10.20m</div>
      </div>

      {/* Mode Controls */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 mb-md-4 bg-white/90 backdrop-blur-md p-1 p-md-1.5 rounded-pill border border-slate-200 shadow-sm d-flex gap-1 w-auto max-w-100 overflow-auto no-scrollbar" style={{ zIndex: 12 }}>
        <button
          onClick={() => animationRef.current.setMode('architectural')}
          className={`btn btn-sm rounded-pill px-2 px-md-3 py-1 py-md-1.5 font-monospace fw-bold text-nowrap ${activeMode === 'architectural' ? 'btn-primary' : 'btn-light text-secondary border-0'}`}
          style={{ fontSize: '0.65rem' }}
        >
          Architectural
        </button>
        <button
          onClick={() => animationRef.current.setMode('structural')}
          className={`btn btn-sm rounded-pill px-2 px-md-3 py-1 py-md-1.5 font-monospace fw-bold text-nowrap ${activeMode === 'structural' ? 'btn-primary' : 'btn-light text-secondary border-0'}`}
          style={{ fontSize: '0.65rem' }}
        >
          Structural
        </button>
        <button
          onClick={() => animationRef.current.setMode('bim')}
          className={`btn btn-sm rounded-pill px-2 px-md-3 py-1 py-md-1.5 font-monospace fw-bold text-nowrap ${activeMode === 'bim' ? 'btn-primary' : 'btn-light text-secondary border-0'}`}
          style={{ fontSize: '0.65rem' }}
        >
          BIM Model
        </button>
        <button
          onClick={() => animationRef.current.setMode('cad')}
          className={`btn btn-sm rounded-pill px-2 px-md-3 py-1 py-md-1.5 font-monospace fw-bold text-nowrap ${activeMode === 'cad' ? 'btn-primary' : 'btn-light text-secondary border-0'}`}
          style={{ fontSize: '0.65rem' }}
        >
          CAD View
        </button>
      </div>

      {/* Status Badge */}
      <div className="position-absolute top-0 start-50 translate-middle-x mt-2 mt-md-3 px-2 px-md-3 py-1 py-md-1.5 rounded-pill bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 d-flex align-items-center gap-1.5 shadow-sm w-auto text-nowrap" style={{ zIndex: 12 }}>
        <span className="spinner-grow spinner-grow-sm text-info" style={{ width: '0.5rem', height: '0.5rem' }} role="status"></span>
        <span className="font-monospace fw-bold text-info" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
          {currentStepName}
        </span>
      </div>
    </div>
  );
};

export default BlueprintAnimation;
