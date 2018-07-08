{% latex
  eq3;
  Eq 3.;
  Forward and backward passes for a <strong>Multiply</strong> node implementing a 2-in 3-out layer.
%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\textrm{Multiply($\mathbf{x}, \mathbf{W})$:}\\\\
\textrm{forward:}\\
\mathbf{x}\mathbf{W} &= \mathbf{y}\\
\begin{bmatrix}x_0 & x_1\end{bmatrix} \begin{bmatrix}w_{00} & w_{01} & w_{02} \\w_{10} & w_{11} & w_{12}\end{bmatrix} &= \begin{bmatrix}y_0 & y_1 & y_2\end{bmatrix}
\\\\
\textrm{backward:}\\
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} &= \mathbf{g}_{mul}\mathbf{W^T}\\
\begin{bmatrix}g_{mul0} & g_{mul1} & g_{mul2}\end{bmatrix} \begin{bmatrix}w_{00} & w_{10}\\w_{01} & w_{11}\\w_{02} & w_{12}\end{bmatrix} &= \begin{bmatrix}g_{x0} & g_{x1}\end{bmatrix}
\\\\
\frac{\partial \mathbf{y}}{\partial \mathbf{W}} &= \mathbf{x^T}\mathbf{g}_{mul}\\
\begin{bmatrix}x_0 \\ x_1\end{bmatrix}\begin{bmatrix}g_{mul0} & g_{mul1} & g_{mul2}\end{bmatrix} &= \begin{bmatrix}g_{w00} & g_{w01} & g_{w02} \\g_{w10} & g_{w11} & g_{w12}\end{bmatrix}
\end{aligned}
$
\end{document}
{% endlatex %}
