{% latex
  eq2;
  Eq 2.;
  Decomposition of Eq. 1.
%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\mathrm{mul}^{(1)} &= \mathbf{x}\mathbf{W^{(1)}}\\
\mathrm{add}^{(1)} &= \mathrm{mul^{(1)}} + \mathbf{b}^{(1)}\\
\mathrm{ReLU}^{(1)} &= \mathrm{ReLU}(\mathrm{add^{(1)}})\\
\mathrm{mul}^{(2)} &= \mathrm{ReLU^{(1)}}\mathbf{W}^{(2)}\\
\mathrm{add}^{(2)} &= \mathrm{mul^{(2)}} + \mathbf{b}^{(2)}\\
\mathrm{smax}^{(2)} &= \mathrm{smax}(\mathrm{add}^{(2)})
\end{aligned}
$
\end{document}
{% endlatex %}
