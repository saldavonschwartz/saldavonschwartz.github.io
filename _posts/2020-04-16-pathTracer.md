---
layout: post
title: Path Tracer
description:
<!-- image: assets/images/panorama/livingroom-anms-5.jpg -->
repo: https://github.com/saldavonschwartz/pathTracer
---
<!-- Links: -->
[l1]: https://raytracing.github.io
[l2]: https://cs184.eecs.berkeley.edu/sp20
[l3]: https://graphics.stanford.edu/courses/cs148-10-summer/docs/2006--degreve--reflection_refraction.pdf

- **[About](#1)**

### <a class="toc_item" name="1"></a>About

This is a **work-in-progress** implementation of a path tracer, largely based on Peter Shirley's *Ray Tracing in One Weekend* series of tutorials plus other resources. It currently runs on MacOS and is CPU only. However the plan is to add CUDA support (perhaps Vulkan and/or Metal too) as well as to continue extending its features.

A detailed writeup of the project will follow as I continue developing this project.

{% include media.html
  sources="pathTracer/spheresTest1.png"
  types="1"
  sizes="70%-auto"
  titles=""
  descriptions=""
  gtitle="Figure 1."
  gdescription="A test scene including Diffuse, Metallic and Dielectric materials, rendered using BVH (Bounding Volume Hierarchy) partitioning scheme."
%}

*References*
- [Peter Shirley - Ray Tracing in One Weekend][l1]
- [UC Berkeley CS184 slides][l2]
- [Stanford CS148: Reflections and Refractions notes][l3]
