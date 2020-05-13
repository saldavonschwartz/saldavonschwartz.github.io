---
layout: post
title: CUDA Path Tracer
description: A GPU-accelerated path tracer
image: assets/images/pathTracer/test2.png
repo: https://github.com/saldavonschwartz/pathTracer
---
<!-- Links: -->
[l1]: https://raytracing.github.io
[l2]: https://cs184.eecs.berkeley.edu/sp20
[l3]: https://graphics.stanford.edu/courses/cs148-10-summer/docs/2006--degreve--reflection_refraction.pdf

- **[About](#1)**

### <a class="toc_item" name="1"></a>About

{% include media.html
  sources="pathTracer/test1.png; pathTracer/test2.png"
  types="1; 1"
  sizes="100%-auto; 100%-auto"
  titles=""
  descriptions=""
  gtitle="Figure 1."
  gdescription="A test scene including Diffuse, Metallic and Dielectric materials, rendered using BVH (Bounding Volume Hierarchy) partitioning scheme."
%}

This is a **work-in-progress** CUDA implementation of a path tracer, largely based on Peter Shirley’s Ray Tracing in One Weekend series of tutorials plus other resources.

Features currently implemented are:

- Materials: Difuse, Metallic Dielectric and Emissive.
- Area lights.
- Bounding Volume Hierarchy (BVH) partitioning.
- Depth of Field.
- Geometry: spheres and planes.

Future features will include:

- Arbitrary geometry (i.e.: FBX, OBJ).
- Probabilistic sampling.
- Deep-Learing-based supersampling.


*References*
- [Peter Shirley - Ray Tracing in One Weekend][l1]
- [UC Berkeley CS184 slides][l2]
- [Stanford CS148: Reflections and Refractions notes][l3]
