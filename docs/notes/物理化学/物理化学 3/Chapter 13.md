# 第十三章：化学热力学平衡

## 均相系统的化学热力学平衡

### 化学平衡原理

已知一个反应，$A_i,\ B_j$ 分别为反应物和生成物，$a_i,\ b_j$ 分别为配平后的化学计量数，有：

$$
a_1 A_1 + \dots + a_i A_i + \dots \rightleftharpoons b_1 B_1 + \dots + b_j B_j + \dots
$$

给定 $T,\ p$，有：

$$
d \xi = -\frac{dn_{A_1}}{a_1} = \dots = -\frac{n_{A_i}}{a_i} = \dots = \frac{n_{B_j}}{b_j}
$$

$$
\therefore \left( \frac{\partial G}{\partial \xi} \right)_{T,\ p,\ 平衡} = 0, \qquad \left( \frac{\partial^2 G}{\partial \xi^2} \right)_{T,\ p,\ 平衡} = 0
$$

定义化学反应吉布斯自由能：

$$
\left( \frac{\partial G}{\partial \xi} \right)_{T,\ p} \equiv \Delta_r G
$$

$$
\because G = \sum_{i(反应物)} n_i \mu_i + \sum_{j(产物)} n_j \mu_j + \sum_{k(不变)} n_k \mu_k
$$

$$
dG = \sum_{i(反应物)} \mu_i dn_i + \sum_{j(产物)} \mu_j dn_j + \sum_{m(全部)} n_m d \mu_m
$$

由吉布斯-杜安方程得，上式第三项为 0。现将化学计量数统一为 $\nu$。

$$
\therefore \left( \frac{\partial G}{\partial \xi} \right)_{T,\ p} = -\sum_{i(反应物)} \nu_i \mu_i + \sum_{j(产物)} \nu_j \mu_j
$$

对于给定 $T,\ p$ 的平衡条件：

$$
\left( \frac{\partial G}{\partial \xi} \right)_{T,\ p,\ 平衡} = 0 = -\sum_{i(反应物)} \nu_i \mu_i + \sum_{j(产物)} \nu_j \mu_j = \Delta_r G_{平衡}
$$

$$
\because \mu_i = \mu_i^* + RT\ln\alpha_i, \qquad \mu_j = \mu_j^* + RT\ln\alpha_j
$$

$$
\begin{aligned}
\therefore \Delta_r G &= \sum_{j} \nu_j \mu_j - \sum_{i} \nu_i \mu_i \\
& = (\sum_{j} \nu_j \mu_j^* - \sum_{i} \nu_i \mu_i^*) + \left( RT \ln \prod_j \alpha_j^{\nu_j} - RT \ln \prod_i \alpha_i^{\nu_i} \right) \\
&\equiv \Delta_r G^* + RT\ln\left( \frac{\prod_j \alpha_j^{\nu_j}}{\prod_i \alpha_i^{\nu_i}} \right)
\end{aligned}
$$

定义加权活度积：

$$
\Omega \equiv \frac{\prod_j \alpha_j^{\nu_j}}{\prod_i \alpha_i^{\nu_i}}
$$

上式称为化学反应热力学基本方程。

注意在常见教材上，$\Delta_r G^\circ = \Delta_r G^*$，参考态应为纯态。有：

$$
\Delta_r G = \Delta_r G^\circ + RT \ln \Omega
$$

平衡时有：

$$
\Delta_r G^\circ + RT \ln \left.\Omega\right|_{平衡} = 0
$$

定义反应平衡常数：

$$
K \equiv \left.\frac{\prod_j \alpha_j^{\nu_j}}{\prod_i \alpha_i^{\nu_i}}\right|_{平衡} = \left.\Omega\right|_{平衡} = \exp\left( -\frac{\Delta_r G^\circ}{RT} \right)
$$

### 正交完备反应基组：生成反应

定义 $E_l$ 为纯态单质

$$
\sum_l c_l E_l \underset{\Delta_f G^\circ}{\overset{T,\ p}{\longrightarrow}} A_i\ (\text{or}\ B_j)
$$

根据状态函数性质：

$$
\Delta_r G^\circ = \sum_{j(产物)} \mu_j \Delta_f G_j^\circ - \sum_{i(反应物)} \mu_i \Delta_f G_i^\circ
$$

## 浓度平衡常数与活度系数平衡常数

### 定义

$$
K = \left.\frac{\prod_j \alpha_j^{\nu_j}}{\prod_i \alpha_i^{\nu_i}}\right|_{平衡} = \left.\frac{\prod_j \chi_j^{\nu_j}}{\prod_i \chi_i^{\nu_i}}\right|_{平衡} \times \left.\frac{\prod_j \gamma_j^{\nu_j}}{\prod_i \gamma_i^{\nu_i}}\right|_{平衡} = K_{\chi} \cdot k_{\gamma}
$$

$$
K_{[c]} = K_{\chi}/K_{\chi \to [c]} = K/(K_{\gamma} \cdot K_{\chi\to[c]})
$$

考虑理想气体反应，$K_{\gamma} = 1$，有：

$$
K = K_{\chi} = K_{[c]} \cdot K_{\chi\to[c]}
$$

### 生物系统内的 $K_{\gamma}$

现有一碱基对数在 30 个以内的双螺旋 DNA 分子，会发生解离。

- 纯水条件，100% 解离

- 加入 1M NaCl，$\sim$100% 结合

由于物种没变，$K$ 为常数，

$$
\frac{K_{[c]@盐}}{K_{[c]@水}} = \frac{K_{\gamma@水}}{K_{\gamma@盐}} \to 0
$$

双链 DNA 的结合力为多重氢键（中等强度吸引），排斥力为多个核苷酸自身带的负电荷（强排斥）。

因此在纯水中以排斥为主，结合不稳定；加入电解质后，体系中有了更多的正负离子，有效屏蔽了负电荷的排斥，以吸引为主。

### $K \equiv 1$ 的系统

$$
\text{HAc}{(sol)} \stackrel{T,\ p}{\rightleftharpoons} \text{H}^+{(sol)} + \text{Ac}^-{(sol)}
$$

考虑纯液态 HAc 为参考态：

$$
\text{HAc}{(l)} \stackrel{T,\ p}{\rightleftharpoons} \text{H}^+{(l)} + \text{Ac}^-{(l)}
$$

$$
\left.\Delta_r G\right|_{平衡} = 0 = \mu_{\text{H}^+{(l)}} + \mu_{\text{Ac}^-{(l)}} - \mu_{\text{HAc}{(l)}}
$$

$$
\Rightarrow \mu_{\text{H}^+{(l)}}^* + \mu_{\text{Ac}^-{(l)}}^* = \mu_{\text{HAc}{(l)}}^*
$$

得到原方程式的化学势：

$$
\left.\Delta_r G\right|_{平衡} = \Delta_r G^* + RT\ln \left. \frac{\alpha_{\text{H}^+{(sol)}} \ \alpha_{\text{Ac}^-{(sol)}}}{\alpha_{\text{HAc}{(sol)}}}\right|_{平衡}
$$

$$
\Rightarrow K = 1 = \left. \frac{\alpha_{\text{H}^+{(sol)}} \ \alpha_{\text{Ac}^-{(sol)}}}{\alpha_{\text{HAc}{(sol)}}}\right|_{平衡}
$$

$$
\therefore K_{\chi} = \frac{1}{K_{\gamma}} \Rightarrow K_{[c]} = K_a = \frac{1}{K_p \cdot K_{\chi\to[c]}}
$$

### 溶液中的 HAc

$$
\text{HAc}{(aq)} \stackrel{T,\ p}{\rightleftharpoons} \text{H}^+{(aq)} + \text{Ac}^-{(aq)}
$$

$$
K = 1 \Rightarrow K_{[c]} = K_a = \frac{1}{K_p \cdot K_{\chi\to[c]}}
$$

- 加入强电解质，$K_a \ \uparrow$

- 高浓度强电解质，$K_a \ \downarrow$

### 溶液环境对 $K_{\chi}$ 的影响

- 有机溶剂环境

$$
\text{HAc}_{(\text{MeOH})} \stackrel{T,\ p}{\rightleftharpoons} \text{H}^+{(\text{MeOH})} + \text{Ac}^-{(\text{MeOH})}
$$

$$
K_a{(\text{MeOH})} \ll K_a(\text{H}_2\text{O})
$$

- 溶剂笼效应

- 盐效应（屏蔽）

- 催化反应

## 化学平衡与多相系统

### 均相反应平衡常数与混合吉布斯自由能

$$
0 = \left( \frac{\partial G}{\partial \xi} \right)_{T,\ p} = \left( \frac{\partial (G_{纯态} + \Delta_{混}G)}{\partial \xi} \right)_{T,\ p}
$$

### 多固相反应

$$
\text{Cu}_2\text{S}_{(s)} \stackrel{T,\ p}{\rightleftharpoons} 2\text{Cu}_{(s)} + \text{S}_{(s)}
$$

$$
\Delta_r G = G_{m(\text{S})} + 2G_{m(\text{Cu})} - G_{m(\text{Cu}_2\text{S})}
$$

$$
\Delta_r G = \mu_{\text{S}} + 2\mu_{\text{Cu}} - \mu_{\text{Cu}_2\text{S}} = \Delta_r G^{\circ} + RT \ln \Omega
$$

- 一般情况下，$\Delta_r G = \Delta_r G^\circ \ne 0$

- 巧合，$\Delta_r G = 0$，但是没有实现混合，不存在平衡常数 $K$

### “固相+流体”反应系统的平衡常数

$$
\text{CaCO}_{3(s)} \stackrel{T,\ p}{\rightleftharpoons} \text{CaO}_{(s)} + \text{CO}_{2(g)}
$$

$$
\Delta_r G = 0 = \Delta_r G^{\circ} + RT \ln \Omega
$$

平衡时有：

$$
\left.K\right|_{平衡} = p_{\text{CO}_{2}(平衡)} = \exp \left( -\frac{\Delta_r G^{\circ}}{RT} \right)
$$

### 相变反应

$$
\text{H}_2\text{O}_{(l)} \longrightarrow \text{H}_2\text{O}_{(g)}
$$

与上一节类似，存在气体就会存在 $K_p$
