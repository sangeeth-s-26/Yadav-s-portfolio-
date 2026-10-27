import os
import pymupdf
from PIL import Image

pdf_path = r"C:\Users\Hp\Downloads\Yadav portfolio.pdf"
doc = pymupdf.open(pdf_path)

output_base = r"c:\Users\Hp\Desktop\yadav\public\images"
subdirs = ["profile", "architectural", "residential", "commercial", "religious", "exterior", "interior"]

for sd in subdirs:
    os.makedirs(os.path.join(output_base, sd), exist_ok=True)

# Helper to save raw image xref
def save_raw_image(xref, target_path):
    img_data = doc.extract_image(xref)
    with open(target_path, "wb") as f:
        f.write(img_data["image"])
    print(f"Saved raw image {xref} -> {target_path} ({img_data['width']}x{img_data['height']})")

# Helper to render full page as high-res PNG (200 dpi)
def save_page_render(page_num, target_path, dpi=200):
    page = doc[page_num - 1]
    pix = page.get_pixmap(dpi=dpi)
    pix.save(target_path)
    print(f"Rendered Page {page_num} -> {target_path} ({pix.width}x{pix.height})")

print("--- Extracting Profile & Hero Images ---")
save_raw_image(6339, os.path.join(output_base, "profile", "yadav_babu.jpg"))
save_raw_image(6327, os.path.join(output_base, "profile", "hero_architecture.jpg"))

print("--- Extracting Architectural CAD Sheets ---")
save_page_render(10, os.path.join(output_base, "architectural", "sanction_drawing_irinjalakuda.png"))
save_page_render(11, os.path.join(output_base, "architectural", "cad_floor_plans.png"))
save_page_render(12, os.path.join(output_base, "architectural", "four_side_elevations.png"))
save_page_render(13, os.path.join(output_base, "architectural", "building_sections.png"))
save_page_render(14, os.path.join(output_base, "architectural", "grid_line_drawing.png"))
save_page_render(15, os.path.join(output_base, "architectural", "centerline_drawing.png"))
save_page_render(16, os.path.join(output_base, "architectural", "setout_drawing.png"))
save_page_render(17, os.path.join(output_base, "architectural", "electrical_layout_drawing.png"))
save_page_render(18, os.path.join(output_base, "architectural", "terrace_landscape_site_plan.png"))

print("--- Extracting Residential CAD Drawings ---")
save_page_render(6, os.path.join(output_base, "residential", "traditional_house_cad_plan.png"))
save_page_render(7, os.path.join(output_base, "residential", "contemporary_house_cad_plan.png"))
save_page_render(8, os.path.join(output_base, "residential", "colonial_house_cad_plan.png"))

print("--- Extracting Commercial Architecture ---")
save_page_render(9, os.path.join(output_base, "commercial", "commercial_building_cad_plan.png"))
save_raw_image(3991, os.path.join(output_base, "commercial", "commercial_building_render.jpg"))

print("--- Extracting Religious Architecture ---")
save_page_render(19, os.path.join(output_base, "religious", "mosque_design_drawing.png"))
save_page_render(20, os.path.join(output_base, "religious", "temple_design_drawing.png"))
save_page_render(21, os.path.join(output_base, "religious", "church_design_drawing.png"))

print("--- Extracting Exterior 3D Renders ---")
save_raw_image(3976, os.path.join(output_base, "exterior", "traditional_house_exterior.jpg"))
save_raw_image(3981, os.path.join(output_base, "exterior", "contemporary_house_exterior.jpg"))
save_raw_image(3986, os.path.join(output_base, "exterior", "colonial_house_exterior.jpg"))
save_raw_image(3991, os.path.join(output_base, "exterior", "commercial_building_exterior.jpg"))

print("--- Extracting Interior 3D Renders ---")
save_raw_image(4004, os.path.join(output_base, "interior", "bedroom_interior.jpg"))
save_raw_image(4007, os.path.join(output_base, "interior", "bathroom_interior.jpg"))
save_raw_image(4011, os.path.join(output_base, "interior", "living_room_interior.jpg"))
save_raw_image(4015, os.path.join(output_base, "interior", "dining_room_interior.jpg"))
save_raw_image(4019, os.path.join(output_base, "interior", "kitchen_interior.jpg"))

print("--- Extracting Skill Logos ---")
skill_dir = os.path.join(output_base, "skills")
os.makedirs(skill_dir, exist_ok=True)
p4 = doc[3]
skill_names = ["autocad", "3dsmax", "revit", "lumion", "vray"]
for i, img in enumerate(p4.get_images()[:5]):
    xref = img[0]
    b = doc.extract_image(xref)
    ext = b["ext"]
    fname = f"{skill_names[i] if i < len(skill_names) else 'skill_' + str(i)}.{ext}"
    target = os.path.join(skill_dir, fname)
    with open(target, "wb") as f:
        f.write(b["image"])
    print(f"Saved skill logo {fname} ({b['width']}x{b['height']})")

print("DONE extracting assets!")
