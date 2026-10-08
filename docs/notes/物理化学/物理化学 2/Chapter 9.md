# 第九章：溶液的基本性质

## 理想气体混合物

对于纯态有：

$$
\mu = \mu^\circ + RT \ln p
$$

### 分压定律

对第 $i$ 个组分有：

$$
p_i = n_i \frac{RT}{V}, \qquad p = \sum_i p_i = \sum_i n_i \frac{RT}{V}
$$

定义：$\tau_i \equiv \frac{n_i}{\sum_i n_i}$，称为摩尔分数，则：

$$
p_i = \tau_i p
$$

上式为 **道尔顿分压定律** 。

注：老师上课批判了所谓的“分体积定律”，其与量子力学不对付，与气体体积的热力学意义对不上。

### 理想气体混合物的化学势

对于理想气体混合物，第 $i$ 个组分的化学势 $\mu_i$ 满足：

$$
(\frac{\partial \mu_i}{\partial p_i})_{T, n} = (\frac{\partial \mu_i}{\partial p})_{T, n} (\frac{\partial p}{\partial p_i})_{T, n} = \frac{1}{\tau_i} (\frac{\partial V}{\partial n_i})_{T, p, n \neq n_i} = \frac{1}{\tau_i} \frac{\partial (\sum_i n_i)}{\partial n_i} \frac{RT}{p} =\frac{1}{\tau_i} \frac{RT}{p} = \frac{RT}{p_i}
$$

$$
\therefore \int_{\mu_i^\circ}^{\mu_i} d\mu_i = \int_{p_i^\circ}^{p_i} \frac{RT}{p_i} dp_i \Rightarrow \mu_i = \mu_i^\circ + RT \ln \frac{p_i}{p_i^\circ} = \mu_i^\circ + RT \ln p_i
$$

值得注意的是，$p_i$ 同样以 bar 为单位。