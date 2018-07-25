{% latex
  eq4;
  Eq 4.;
  Gradient Descent with momentum (shown for a single parameter theta).
%}
\documentclass[border=2pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\bar \theta_{t+1} &\leftarrow \beta \bar \theta_{t} + (1 - \beta) \nabla_{\theta} L(f(\mathbf{x}, \theta_t), \mathbf{y^{\ast}}) \ &\textrm{\scriptsize (averaging step)}\\
\theta_{t+1} &\leftarrow \theta_{t} - \alpha \bar \theta_{t+1} \ &\textrm{\scriptsize (minimization step)}
\end{aligned}
$
\end{document}
{% endlatex %}
