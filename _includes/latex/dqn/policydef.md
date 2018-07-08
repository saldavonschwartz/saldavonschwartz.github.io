{% latex
  policydef;
  Eq 1.;
  (a) Optimal policy in terms of optimal Q-values. (b) Optimal Q-values in terms of known MDP model.
%}
\documentclass[border=0pt]{standalone}
\usepackage{amsmath}
\begin{document}
\large
$
\begin{aligned}
\pi^{\ast}(s) &= \underset{a}{\operatorname{argmax}}\ Q^{\ast}(s,a)\ &(a)
\\Q^{\ast}(s_0, a_0) &= \sum_{s_1} P(s_1 | s_0, a_0) [r(s_0, a_0, s_1) + \gamma \max_{a_1} Q^{\ast}(s_1, a_1)]\ &(b)
\end{aligned}
$
\end{document}
{% endlatex %}
