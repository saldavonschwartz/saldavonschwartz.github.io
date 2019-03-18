{% latex
  eq1;
  Eq 1.;
  Functional definition of the computation graph from Figure 2.
%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\usepackage{xcolor}
\usepackage{tikz-3dplot}
\begin{document}
\large

$
\begin{bmatrix}
p_{11} & p_{12} & \color{red}{p_{13}} & p_{14}\\
p_{21} & p_{22} & \color{red}{p_{23}} & p_{24}\\
p_{31} & p_{32} & \color{red}{p_{33}} & 1
\end{bmatrix}\ \begin{bmatrix}x\\y\\\color{red}0\\1\end{bmatrix} \Longrightarrow
\begin{bmatrix}
p_{11} & p_{12} & p_{13}\\
p_{21} & p_{22} & p_{23}\\
p_{31} & p_{32} & 1
\end{bmatrix}\ \begin{bmatrix}x\\y\\1\end{bmatrix}
$

\end{document}
{% endlatex %}
