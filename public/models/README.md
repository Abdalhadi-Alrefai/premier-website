# Premier Dental Lab — 3D Model Assets Directory

This directory is reserved for clinical CAD/CAM 3D model assets rendered in the Premier Dental Lab marketing website.

## Required Asset

- **File Name**: `dental-crown.glb`
- **Location**: `apps/website/public/models/dental-crown.glb`
- **Format**: Binary glTF (`.glb`)
- **Recommended Polygon Count**: 15,000 – 60,000 triangles
- **Anatomical Structure**: Mandibular or maxillary molar/premolar single crown with realistic occlusal anatomy, fissure depth, margin line, and axial contours.
- **Normals**: Vertex normals calculated with smooth shading (avoid hard-faceted normals).
- **Scale**: Normalized to approximately 1-2 scene units (the web application automatically centers and normalizes bounding-box scales).

## Material Configuration

The Three.js / React Three Fiber renderer automatically applies Premier's proprietary multi-layered zirconia ceramic material (`MeshPhysicalMaterial`) with:

- Ivory ceramic base (`#F6F7F2`)
- High-gloss glaze clearcoat (`0.6`)
- Sub-surface translucency (`0.20`)
- Brand cyan specular rim reflections (`#22A6BF`)
