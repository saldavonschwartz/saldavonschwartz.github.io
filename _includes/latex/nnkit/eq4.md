{% latex eq4, "<strong>Eq 4.</strong> Gradient Descent with momentum."%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\bar \theta_{t+1} &\leftarrow \beta \bar \theta_{t} + (1 - \beta) \nabla_{\theta} L(f(\mathbf{x}, \theta_t), \mathbf{y}) \ &\textrm{\scriptsize (averaging step)}\\
\theta_{t+1} &\leftarrow \theta_{t} - \alpha \bar \theta_{t+1} \ &\textrm{\scriptsize (minimization step)}
\end{aligned}
$
\end{document}
{% endlatex %}
