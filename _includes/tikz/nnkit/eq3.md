{% latex eq3, "<strong>Eq 3.</strong> Forward and backward passes for a <strong>Multiply</strong> node implementing a 2-in 3-out layer."%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\textrm{Multiply(x, W):}\\\\
\textrm{forward:}\\
\mathbf{x}\boldsymbol{W} &= \mathbf{y}\\
\begin{bmatrix}x_0 & x_1\end{bmatrix} \begin{bmatrix}w_{00} & w_{01} & w_{02} \\w_{10} & w_{11} & w_{12}\end{bmatrix} &= \begin{bmatrix}y_0 & y_1 & y_2\end{bmatrix}
\\\\
\textrm{backward:}\\
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} &= \mathbf{g}\boldsymbol{W}^\mathbf{T} = \mathbf{\bar w}\\
\begin{bmatrix}g_0 & g_1 & g_2\end{bmatrix} \begin{bmatrix}\bar w_{00} & \bar w_{10}\\w_{01} & \bar w_{11}\\w_{02} & \bar w_{12}\end{bmatrix} &= \begin{bmatrix}w_0 & w_1\end{bmatrix}
\\\\
\frac{\partial \mathbf{y}}{\partial \boldsymbol{W}} &= \boldsymbol{x}^\mathbf{T}\mathbf{g} = \boldsymbol{\bar X}\\
\begin{bmatrix}x_0 \\ x_1\end{bmatrix}\begin{bmatrix}g_0 & g_1 & g_2\end{bmatrix} &= \begin{bmatrix}\bar x_{00} & \bar x_{01} & \bar x_{02} \\\bar x_{10} & \bar x_{11} & \bar x_{12}\end{bmatrix}
\end{aligned}
$
\end{document}
{% endlatex %}
