# 第十一章：表界面与胶体(1)——表界面

## 表界面的性质

### 表界面的特性

定义：即两相界面

表面的热力学性质：

- 表面分子的化学环境不同于体相

- 表面重构不可避免

对于一个给定 $T,\ p$ 的平衡态，引入表面自由度 $a_j$：

$$
dG = -SdT + Vdp + \sum_i \mu_{i(\infty)} dn_i + \sum_j \sigma_j da_j
$$

定义表面势 $\sigma_j$：

$$
\sigma_j = \left( \frac{\partial G}{\partial a_j} \right)
$$

一个系统的 $G$：

$$
G = \sum_i \mu_{i(\infty)}n_i + \sum_j \sigma_j a_j
$$

$\mu_{i(\infty)}$ 为无穷大体相的化学势。

### 凝聚态-气态表面

- 固-气，极不容易得到干净表面，数据不准确

- 液-气，给定 $T,\ p$，得到表面势 $\sigma$

    - 对于高对称性分子，大致有 $\sigma \propto E_{m,分子/液}^\circ \approx T_{b.p.}$，$\sigma$ 与分子摩尔面积有关 

    - 长链分子，$\sigma$ 主要决定于 -CH$_3$

    - 能够形成氢键的极性长链有机分子，$\sigma$ 也主要决定于 -CH$_3$

### 固体与其他的表面

即固-固，固-液，固-气。

- 固-固界面，一般会崩塌成 2 个固-气界面

- 固-液界面

- 液-液界面，出现分子富集和定向组装

## 表面张力

### 肥皂膜实验

表面张力是单位长度膜产生的径向收缩力

$$
F_{重力} = 2l \cdot F_{张力}
$$

### Laplace 公式

$$
dW = F dr = F_{张力} da
$$

$$
da = 4\pi[(r+dr)^2-r^2] = 8\pi rdr
$$

平衡条件：

$$
(p_{内}-p_{外})4\pi r = 8\pi rF_{张力}
$$

$$
p_{内}-p_{外} = \frac{2F_{张力}}{r}
$$

### Young 方程

$$
F_{气-固} - F_{液-固} = F_{液-气} \cos \theta
$$

## 吉布斯方案

### 吉布斯表面方程

对于给定的 $T,\ p$，

$$
dG = \sum_i \mu_{i(\infty)} dn_i + \sum_j \sigma_j da_j -SdT + Vdp
$$

$$
G = \sum_i \mu_{i(\infty)} n_i + \sum_j \sigma_j a_j
$$

### 肥皂膜实验

对于给定的 $T,\ p$，

$$
\left. \left( \frac{\partial G}{\partial x} \right)_{T,p,n} \right|_{平衡} = 0
$$

$$
G = \sum_i \mu_{i(\infty)} n_i + \sigma (2 l x)
$$

$$
F_{重力} = \left( \frac{\partial G}{\partial x} \right)_{T,p,n} = 2 l \sigma + 2 l x \left( \frac{\partial \sigma}{\partial x} \right)_{T,p,n}
$$

若 $\left( \frac{\partial \sigma}{\partial x} \right)_{T,p,n} = 0$，得到：$\sigma = F_{张力}$

实际上：

$$
F_{张力} = \sigma + x \left( \frac{\partial \sigma}{\partial x} \right)_{T,p,n}
$$

### 小液滴实验

$$
p_{内} - p_{外} = \frac{2 \sigma}{r} + \left( \frac{\partial \sigma}{\partial r} \right)_{T,p,n}
$$

### 毛细管现象

$$
h = \frac{2 \sigma_{气-液}}{\rho g r} \cos \theta \approx \frac{2 \sigma_{气-液}}{\rho g r}
$$

热力学第一定律：$dG \le dW$，可逆 $dG = dW$

热力学第二定律：平衡条件 $\left( \frac{\partial G}{\partial h} \right)_{T,p,n} = 0$

$$
G = G_{体相} + G_{表面} + G_{重力} = [\sum_i \mu_{i(\infty)} n_i] + [(\sigma_{液-固} - \sigma_{气-固}) \int_{0}^{h} C_{管} dh] + [\int_{0}^{h} \rho g h A_{管} dh]
$$

#### 横截面为圆形

$$
C_{管} = 2 \pi r,\quad A_{管} = \pi r^2
$$

$$
0 = \left( \frac{\partial G}{\partial h} \right)_{T,p,n} = 2 \pi r (\sigma_{液-固} - \sigma_{气-固}) + \rho g h (\pi r^2)
$$

$$
h = \frac{2(\sigma_{气-固} - \sigma_{液-固})}{\rho g r}
$$

考虑三相界面，不需设气液界面为圆弧

$$
\sigma_{气-固} - \sigma_{液-固} = \sigma_{气-液} \cos \theta
$$

#### 横截面为正方形

$$
C_{管} = 4 L,\quad A_{管} = L^2
$$

$$
0 = \left( \frac{\partial G}{\partial h} \right)_{T,p,n} = 4 L (\sigma_{液-固} - \sigma_{气-固}) + \rho g h L^2
$$

$$
h = \frac{4(\sigma_{气-固} - \sigma_{液-固})}{\rho g L}
$$

## 表面吸附

### 固体表面的等价位点吸附（等温吸附）

$$
\text{Site} + i_{自由} \underset{k_{吸}}{\overset{k_{脱}}{\rightleftharpoons}} (\text{Site}-i)_{吸附}
$$

平衡条件：

$$
v_{吸} = v_{脱}
$$

$$
v_{吸} = k_{吸} N_{自由} c \quad v_{脱} = k_{脱} N_{吸附} \qquad N = N_{自由} + N_{吸附}
$$

$$
\Rightarrow \frac{k_{吸}}{k_{脱}} = K = \frac{N_{吸附}}{N_{自由} c}
$$

定义表面覆盖度：

$$
\Gamma = \frac{N_{吸附}}{N}
$$

$$
\Rightarrow K = \frac{\Gamma}{(1-\Gamma)c} \Rightarrow \Gamma = \frac{Kc}{1+Kc}
$$

### 复杂吸附

#### 多层吸附

#### 非等价位点

#### BET 吸附