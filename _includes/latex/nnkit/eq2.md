{% latex eq2, "<strong>Eq 2.</strong> Decomposition of Eq. 1."%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\mathrm{Mul^{(1)}} &= \mathbf{x}\boldsymbol{W^{(1)}}\\
\mathrm{Add^{(1)}} &= \mathrm{Mul^{(1)}} + \mathbf{b^{(1)}}\\
\mathrm{ReLU^{(1)}} &= max(0, \mathrm{Add^{(1)}})\\
\mathrm{Mul^{(2)}} &= \mathrm{ReLU^{(1)}}\boldsymbol{W^{(2)}}\\
\mathrm{Add^{(2)}} &= \mathrm{Mul^{(2)}} + \mathbf{b^{(2)}}\\
\mathrm{SMax^{(2)}} &= max(0, Add_2)
\end{aligned}
$
\end{document}
{% endlatex %}
