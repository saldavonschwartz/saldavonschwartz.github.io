{% latex
  dqn-lite;
  Algorithm 2.;
  DQN-Lite.
%}
\documentclass[preview, border=0pt]{standalone}
\usepackage{amsfonts}
\usepackage[noend]{algpseudocode}
\usepackage[paperwidth=500pt, paperheight=430pt, margin=0pt]{geometry}
\usepackage{mathtools}
\algrenewcommand\algorithmicrequire{ \textbf{where:}}
\newcommand{\R}{\mathbb{R}}

\makeatletter
\renewcommand{\ALG@beginalgorithmic}{\large}
\makeatother
\algrenewcommand\algorithmicfunction{\textbf{def}}

\newcommand{\mat}[1]{\mathbf{#1}}
\newcommand{\defeq}{\vcentcolon=}
\newcommand{\func}[1]{\operatorname{#1}}
\newcommand{\pluseq}{\stackrel{+}\gets}

\begin{document}
\begin{algorithmic}[1]
\Function {\bf DQN-Lite}{$env, s, h, t_{max}, t_{update}, p_{min}, p_{max}, p_{batch}, \alpha, \gamma, \epsilon_{min}, \epsilon_{max}, \epsilon_{steps}, \L$}:
\Statex {\normalsize $env = \textrm{environment};\ s = \textrm{params init seed};\ h = \textrm{hidden layer size}$}
\Statex {\normalsize $t_{max} = \textrm{steps to train for};\ t_{update} = \textrm{update $Q_t$ every this many training steps of $Q$}$}
\Statex {\normalsize $p_{min} = \textrm{xp collected before training starts}$}
\Statex {\normalsize $p_{max} = \textrm{max xp collected at any one time}$}
\Statex {\normalsize $p_{batch} = \textrm{number of xp to train on at a time}$}
\Statex {\normalsize $\alpha = \textrm{learning rate};\ \gamma = \textrm{discount factor}$}
\Statex {\normalsize $\epsilon_{min}, \epsilon_{max}, \epsilon_{steps} = \textrm{exploration schedule: from max to min, over steps}$}
\Statex {\normalsize $\L = \textrm{loss function}$}
\Statex
\State $f, a \gets env.state.dim, env.action.dim$
\State $Q: \R^{n \times f} \rightarrow \R^{n \times a} \defeq \func{FFN}(s, f, h, a)$\Comment{prediction network}
\State $Q_t \gets copy(Q)$\Comment{target network}
\Statex
  \State $replay \gets queue(p_{max})$
  \State $t_{total} \gets t_{max} + p_{min}$
  \State $s_0 \gets env.reset()$
  \State $t \gets 0$
  \Statex
  \While{$t < t_{total}$}
  \State $k \gets \max(0, \min(1, \frac{t - (p_{min} - 1)}{\epsilon_{steps}}))$\Comment{$\epsilon{\operatorname{-}}$schedule}
  \State $\epsilon \gets k \epsilon_{min} + (1 - k) \epsilon_{max}$
  \Statex
  \State $a_0 \gets \epsilon{\operatorname{-}}greedy(\epsilon, \underset{a}{\operatorname{argmax}}\ Q(s_0))$
  \State $s_1, r_1, done \gets env.step(a_0)$
  \State $replay \pluseq (s_0, a_0, s_1, r_1, done)$\Comment{accumulate experience}
  \State $t \pluseq 1$
  \Statex
  \If{$t \geq p_{min}$}
  \State $\mat E \gets rand(replay, p_{batch})$
  \State $\mat{\hat Y} \gets Q(\mat E_{n, 0})$
  \State $\mat Y_{n, a} \gets \begin{cases}
      \mat E_{n,3} + \gamma \max Q_t(\mat E_{n,2}) * \neg \mat E_{n, 4} & a = \mat E_{n, 1}\\
      \mat{\hat Y}_{n, a} & a\neq\mat E_{n, 1}
   \end{cases}$
  \Statex
  \State $optimize(Q, \L(\mat Y, \mat{\hat Y}), \alpha)$\Comment{learn Q-values}
  \Statex
  \If{$\mod((t - p_{min}) + 1, t_{update}) = 0$}\Comment{update target network}
  \State $Q_t \gets copy(Q)$
  \EndIf
  \EndIf
  \Statex
  \If{$done$}
  \State $s_0 \gets env.reset()$
  \Else
  \State $s_0 \gets s_1$
  \EndIf
  \EndWhile
  \Statex
\State \textbf{return} $\pi(s) \defeq \underset{a}{\operatorname{argmax}}\ Q_t(s, a)$
\EndFunction

\end{algorithmic}
\end{document}

{% endlatex %}
