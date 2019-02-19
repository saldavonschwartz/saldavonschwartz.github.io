{% latex
  stateMachine;
  Figure 1.;
  Teleport component state machine. Transitions are triggered by methods (text above bars) or automatically (epsilon). Transition delegates (text below bars) allow customizing the component's behavior.
%}
\documentclass[tikz, border=0pt]{standalone}
\usepackage{pgf, amsmath}
\usetikzlibrary{arrows, automata, calc}
\usepackage[latin1]{inputenc}
\begin{document}
\large
\begin{tikzpicture}[->,>=stealth',shorten >=1pt, auto, node distance=4.5cm, semithick]
  \tikzstyle{every state}=[fill=none, line width=1.5pt, draw=black!60, text=black]

  \node[initial, state] (0)              {\normalsize $Idle$};
  \node[state]          (1) [above right of=0] {\normalsize $Probing$};
  \node[state]          (2) [below right of=0] {\normalsize $Teleporting$};

  \path (0) edge              node {$\frac{\text{StartProbing}}{\text{OnStartProbing}}$} (1)
            edge              node {$\frac{\text{TeleportToLastProbedLocation} \mid \text{TeleportToLocation}}{\text{OnStartTeleporting}}$} (2)
        (1) edge [loop right] node {$\frac{\epsilon}{\text{OnProbing}}$} (1)
            edge [bend left]  node {$\frac{\text{EndProbing}}{\text{OnEndProbing}}$} (0)
        (2) edge [bend left]  node {$\frac{\epsilon}{\text{OnEndTeleporting}}$} (0);

\end{tikzpicture}

\end{document}
{% endlatex %}
