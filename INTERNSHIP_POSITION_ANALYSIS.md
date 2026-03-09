# 인턴십 포지션 심층 분석 보고서

## Apple MLR (Shuangfei Zhai) vs. FAIR/Meta (Hu Xu)

> 분석일: 2026-03-09
> 대상: Dong-Hwan Jang (UIUC CS PhD 1년차, Advisor: Ismini Lourentzou)
> 분석 방식: 포지션별 전담 에이전트 2인이 독립적으로 리서치 후 합동 평가

---

# PART 1: 포지션별 심층 분석

---

## 포지션 A: Apple MLR — Normalizing Flows 연구 인턴

### 1. 팀 리더: Shuangfei Zhai

- **직책:** Staff Research Scientist, Apple MLR (2017~)
- **학력:** PhD in CS, SUNY Binghamton (2012-2017)
- **Google Scholar:** 4,450+ citations, h-index 16
- **핵심 연구:** Normalizing Flows의 부활을 이끄는 연구자. TarFlow 시리즈의 창시자.
- **주요 협력자:** Navdeep Jaitly, Jiatao Gu, Josh Susskind, Miguel Angel Bautista, Laurent Dinh (RealNVP/NICE 공동발명자)
- **기타 주요 업적:** Attention Free Transformer (AFT), σ-Reparam (Transformer 안정화), S3Pool

### 2. 팀이 발표한 4편의 논문 분석

#### Paper 1: TarFlow — "Normalizing Flows are Capable Generative Models"
- **arXiv:** [2412.06329](https://arxiv.org/abs/2412.06329) | **ICML 2025 Oral**
- **저자:** Shuangfei Zhai (1저자) + 9명 (Apple)
- **코드:** [github.com/apple/ml-tarflow](https://github.com/apple/ml-tarflow)
- **핵심:** Transformer 기반 Masked Autoregressive Flow 아키텍처. 이미지 패치 위에서 autoregression 방향을 레이어마다 교차. Gaussian noise augmentation + post-training denoising + guidance 기법 도입.
- **의의:** NF 모델이 diffusion 모델과 비교 가능한 생성 품질을 달성한 최초 사례. Likelihood 추정에서도 SOTA.

#### Paper 2: STARFlow — "Scaling Latent Normalizing Flows for High-resolution Image Synthesis"
- **arXiv:** [2506.06276](https://arxiv.org/abs/2506.06276) | **NeurIPS 2025 Spotlight**
- **저자:** Jiatao Gu (1저자), ... Shuangfei Zhai (last/senior author)
- **코드:** [github.com/apple/ml-starflow](https://github.com/apple/ml-starflow)
- **핵심:** TarFlow를 고해상도로 확장. Pretrained autoencoder의 latent space에서 동작. Deep-shallow 아키텍처 설계. TarFlow의 이론적 universality 증명.
- **의의:** NF가 고해상도 이미지에서도 작동함을 증명. Class-conditional 및 text-conditional 생성 가능.

#### Paper 3: TarFlowLM — "Flexible Language Modeling in Continuous Space"
- **arXiv:** [2507.00425](https://arxiv.org/abs/2507.00425)
- **저자:** Ruixiang Zhang (1저자), Shuangfei Zhai (2저자) + 7명
- **핵심:** TarFlow 패러다임을 언어 모델링으로 확장. Discrete token 대신 continuous latent space에서 autoregressive NF로 언어 모델링. 양방향 context 포착, 블록 단위 생성, 계층적 multi-pass 생성 지원.
- **의의:** NF가 이미지뿐 아니라 언어에도 적용 가능함을 입증.

#### Paper 4: STARFlow-V — "End-to-End Video Generative Modeling with Normalizing Flows"
- **arXiv:** [2511.20462](https://arxiv.org/abs/2511.20462)
- **저자:** Jiatao Gu (1저자), ... Shuangfei Zhai (last/senior author)
- **코드:** [github.com/apple/ml-starflow](https://github.com/apple/ml-starflow)
- **핵심:** STARFlow를 비디오로 확장. Global-local 아키텍처로 시공간 latent space에서 동작. Flow-score matching 기법으로 비디오 일관성 향상. Jacobi iteration 기반 병렬 샘플링. Text-to-video, image-to-video, video-to-video 지원.
- **의의:** NF 기반 고품질 autoregressive 비디오 생성의 최초 사례.

### 3. 연구 방향의 핵심 서사

```
TarFlow (이미지) → STARFlow (고해상도) → TarFlowLM (언어) → STARFlow-V (비디오)
```

**Normalizing Flows를 범용 생성 프레임워크로 확립**하는 체계적 프로그램. 1년 만에 ICML Oral + NeurIPS Spotlight — 매우 빠른 연구 속도.

### 4. NF가 Diffusion 대비 가지는 이론적 장점

| 특성 | Normalizing Flows | Diffusion Models |
|------|------------------|-----------------|
| Likelihood | **정확한 계산** | ELBO 근사 |
| 생성 속도 | **Single/few pass** | 수십~수백 denoising steps |
| 가역성 | **네이티브 invertible** | 별도 encoder 필요 |
| 멀티태스크 | **구조적 지원** (invertibility 활용) | 태스크별 conditioning |
| 이론적 기반 | Change of variables, 정확 | Score matching, 근사적 |

---

## 포지션 B: FAIR/Meta — Video Pretraining 연구 인턴

### 1. 팀 리더: Hu Xu

- **직책:** Research Scientist, FAIR Labs (Meta)
- **학력:** PhD in CS, University of Illinois at Chicago
- **Google Scholar:** 24,500+ citations
- **핵심 연구:** 대규모 데이터 큐레이션 + 멀티모달 프리트레이닝
- **주요 업적:**
  - **MetaCLIP** (ICLR 2024 Spotlight) — CLIP의 성공이 아키텍처가 아닌 데이터에 있음을 증명. 메타데이터 기반 큐레이션으로 CLIP 능가 (70.8% vs 68.3% zero-shot ImageNet)
  - **MetaCLIP 2** (NeurIPS 2025 Spotlight) — 다국어 확장
  - **CiT: Curation in Training** (ICCV 2023) — 훈련 중 동적 데이터 큐레이션
  - **MoDE** (CVPR 2024) — Mixture-of-Experts 기반 CLIP 데이터
  - **Llama 3** — 핵심 저자
- **핵심 전문성:** "주어진 모델에서 최적의 데이터 분포, 큐레이션 전략, 훈련 레시피는 무엇인가?"

### 2. FAIR의 Video Pretraining 연구 스택

#### V-JEPA 2 (2025년 6월)
- 1.2B 파라미터 world model, 100만 시간+ 비디오로 self-supervised 학습
- JEPA 아키텍처: 픽셀 대신 **representation space**에서 예측
- Something-Something v2 77.3%, PerceptionTest 84.0 달성
- Zero-shot 로봇 manipulation 65-80% 성공률

#### Perception Encoder (NeurIPS 2025 Oral)
- 최대 2B 파라미터 비전 인코더
- 2단계: 이미지 프리트레이닝 (5.4B 큐레이션된 쌍) → 비디오 파인튜닝 (22M 비디오)
- **핵심 발견:** 최적 임베딩이 최종 레이어가 아닌 **중간 레이어**에 존재

#### Movie Gen
- 30B 파라미터 text-to-video 모델 (1080p, 16초)
- Instagram/Meta 플랫폼에 배포됨

#### VL-JEPA (2025년 말)
- 1.6B 파라미터로 훨씬 큰 generative VLM과 경쟁
- 50% 적은 trainable parameters

### 3. "World Models" — FAIR의 핵심 철학

Yann LeCun (2025년 12월 Meta 퇴사, AMI Labs 설립)의 핵심 주장:

> "LLM은 텍스트 토큰에서만 작동하므로 범용 지능에 도달할 수 없다. AGI의 경로는 비디오, 오디오, 센서 데이터에서 물리적 세계의 내부 표현을 학습하는 **world models**를 통해야 한다."

**JEPA의 핵심 원리:** 픽셀이나 토큰을 생성하는 대신 **추상적 표현(representation)**을 예측. 인간이 공을 던지면 매 프레임을 렌더링하지 않고 "공이 다시 내려올 것"이라는 *의미*를 예측하는 것과 같은 원리.

LeCun이 떠났지만 FAIR의 world model 연구는 계속됨 — 이 포스팅이 그 증거.

### 4. 팀 문화 시그널 분석

> *"we're especially happy to hear from PhD students who have been prioritizing research last year and may not have had much time for ad-hoc/random trials on internship interviews"*

이 문구가 말해주는 것들:

| 시그널 | 의미 |
|--------|------|
| "prioritizing research" | **연구 우선 문화.** LeetCode 실력보다 논문과 깊이를 평가 |
| "ad-hoc/random trials" | **anti-leetcode 성향.** 전통적 빅테크 인터뷰 형식 거부 |
| 3월 시점 포스팅 | **late-cycle 전략.** 연구에 몰두하느라 아직 인턴을 못 구한 우수 PhD를 노림 |
| 공감적 어조 | **인턴을 연구 파트너로** 대우하는 환경 |

---

# PART 2: 동환님 적합도 평가

## Agent 1 평가: Apple MLR — Normalizing Flows 팀

### 적합도 점수: B (Fit은 있으나 Gap이 큼)

#### 강점 (동환님이 가진 것)

1. **Generative model 경험:** RewardFlow (CVPR 2026)에서 diffusion model + Langevin dynamics를 다뤘으므로 generative modeling의 기본 역량은 입증됨
2. **Efficiency 철학 일치:** Model Stock (24x cost reduction), DynOPool (33% compression) — Apple MLR도 "simple and scalable"을 강조하므로 효율성 마인드셋이 맞음
3. **Transformer 아키텍처 이해:** TarFlow는 Transformer 기반이므로, Vision Transformer 경험 (Model Stock에서 ViT 사용)이 직접 연관
4. **Strong publication record:** CVPR 2022 → ECCV 2024 Oral → CVPR 2026 × 2. 연구 생산성 증명
5. **Video 관련 경험:** PyraTok (CVPR 2026)에서 비디오 토크나이저를 다뤄 STARFlow-V와 연결점 존재

#### 약점 (동환님에게 부족한 것)

1. **🔴 Normalizing Flow 경험 없음:** 이것이 가장 큰 gap. TarFlow 팀은 NF 전문가를 찾고 있으며, 동환님의 논문 중 NF를 직접 다룬 것이 없음. Flow matching ≠ Normalizing Flow (둘은 관련은 있지만 다름).
2. **🔴 Likelihood-based modeling 경험 부족:** NF의 핵심은 exact likelihood computation. 동환님 연구는 주로 loss landscape geometry (Model Stock)와 reward-guided sampling (RewardFlow)에 집중되어 있어, change-of-variables formula, Jacobian 계산 등에 대한 직접 경험이 불명확.
3. **🟡 수학적 깊이 불확실:** TarFlow 논문은 Masked Autoregressive Flows의 이론적 기반과 universality proof를 포함. 동환님의 논문들은 실험적 성격이 강하며, 이론적 contribution이 상대적으로 적음.
4. **🟡 Apple 팀과의 네트워크 없음:** Shuangfei Zhai 팀의 주요 협력자들과의 접점이 보이지 않음. DM을 보내라고 했으므로 cold outreach가 필요.
5. **🟡 JAX 경험 불확실:** Apple MLR의 일부 프로젝트는 JAX를 사용. 동환님의 기술 스택이 명시되지 않아 확인 불가.

#### 가능성 있는 인턴 프로젝트 (동환님 기준)

- NF를 새로운 modality (3D, audio)로 확장
- STARFlow-V의 비디오 생성 품질 개선 (PyraTok의 비디오 토크나이저 경험 활용)
- Reward-guided sampling을 NF에 적용 (RewardFlow의 아이디어를 TarFlow로 이전)
- Model merging 기법을 NF 훈련에 적용 (Model Stock의 insight 활용)

---

## Agent 2 평가: FAIR/Meta — Video Pretraining 팀

### 적합도 점수: B+ (Gap은 있지만 연결점이 더 많음)

#### 강점 (동환님이 가진 것)

1. **Video 연구 경험:** PyraTok (CVPR 2026)에서 4K/8K 비디오 토크나이저를 다뤘고, "language-aligned pyramidal tokenizer"는 비디오 프리트레이닝과 직접 연관. Hu Xu의 데이터 큐레이션 관점에서 비디오 토큰화는 핵심 전처리 단계.
2. **Controllable generation:** RewardFlow의 reward-guided editing은 FAIR의 video generation (Movie Gen) 방향과 맞음. "Training-free, zero-shot" 접근은 FAIR이 좋아하는 스타일.
3. **대규모 프리트레이닝 이해:** MetaCLIP의 핵심은 "데이터가 모델 성능을 결정한다"는 것. 동환님의 Samsung 경험 (production 배포, OOD-robust fine-tuning)은 실제 대규모 시스템에서의 데이터 품질 문제를 이해하고 있음을 보여줌.
4. **Weight space geometry:** Model Stock의 fine-tuning dynamics 분석은 프리트레이닝 연구자에게 매력적인 관점. Hu Xu가 "모델의 데이터 의존성"을 연구한다면, 동환님은 "모델의 weight 공간 구조"를 연구해왔으므로 상보적.
5. **연구 우선 평가 기준에 유리:** FAIR이 "research를 우선시한 PhD"를 환영한다고 했고, 동환님은 CVPR 2026 두 편으로 연구 성과가 충분.
6. **UIUC-Meta 연결:** UIUC CS는 Meta/FAIR과 강한 학술 네트워크를 가지고 있음.

#### 약점 (동환님에게 부족한 것)

1. **🟡 Self-supervised learning 논문 없음:** JEPA, contrastive learning (CLIP, BYOL, VICReg) 등 SSL 관련 직접 논문이 없음. FAIR의 비디오 프리트레이닝 핵심인 SSL에 대한 연구 경험 부족.
2. **🟡 대규모 데이터 큐레이션 경험 부족:** MetaCLIP의 핵심은 web-scale 데이터 큐레이션. 동환님의 연구는 주로 모델 아키텍처/알고리즘 측면이며, 데이터 파이프라인 경험이 보이지 않음 (COVID-19 데이터셋은 규모가 작음).
3. **🟡 PyraTok에서의 기여도:** 5저자이므로 인터뷰에서 개인 기여를 명확히 설명해야 함.
4. **🟠 Robotics 경험 없음:** 포스팅에 "robotics"가 언급되었지만, 동환님은 로보틱스 경험이 전무. 하지만 이건 "related interests" 중 하나일 뿐이므로 필수는 아님.
5. **🟠 분산 학습 경험 불명확:** V-JEPA 2는 100만 시간 비디오로 훈련. 이 규모의 분산 학습 경험이 있는지 CV에서 확인 불가.

#### 가능성 있는 인턴 프로젝트 (동환님 기준)

- 비디오 데이터 큐레이션 방법론 연구 (MetaCLIP의 비디오 버전)
- PyraTok 스타일 토크나이저를 Perception Encoder 파이프라인에 통합
- Video pretraining에서의 효율적 fine-tuning 연구 (Model Stock 아이디어 적용)
- Reward-guided video generation (RewardFlow + Movie Gen)

---

# PART 3: 종합 비교 — 어디에 지원해야 하는가?

## 직접 비교표

| 평가 항목 | Apple MLR (NF) | FAIR/Meta (Video) | 동환님에게 유리한 쪽 |
|-----------|---------------|-------------------|---------------------|
| **Research fit** | B (NF 경험 없음) | B+ (Video 경험 있음) | **FAIR** |
| **Publication 가능성** | A (팀 생산성 매우 높음) | A (FAIR 전통적 강점) | 동등 |
| **기술 준비도** | B- (NF 이론 학습 필요) | B (SSL/데이터 큐레이션 학습 필요) | **FAIR** (gap 더 작음) |
| **네트워크 접근성** | C (Apple은 보수적, cold DM 필요) | B+ (UIUC-Meta 네트워크, DM 환영) | **FAIR** |
| **채용 프로세스** | 불명확 (Apple 보수적) | 유리 (research-first 평가, late-cycle) | **FAIR** |
| **커리어 임팩트** | A (NF의 선구자 팀) | A (world model은 AI의 다음 패러다임) | 동등 |
| **인턴 문화** | B+ (Apple MLR은 자유도 높은 편) | A (FAIR은 인턴에게 실질적 연구 ownership) | **FAIR** |
| **멘토 영향력** | A- (Shuangfei Zhai는 실력 있지만 niche) | A (Hu Xu는 넓은 영향력 + Llama 3 핵심 저자) | 동등 |

## 결론: 두 곳 모두 지원하되, 전략이 다르다

### 🏆 1순위 추천: FAIR/Meta (Hu Xu)

**이유:**
1. PyraTok의 비디오 경험이 직접적 연결점
2. 팀이 명시적으로 "연구 우선 PhD"를 환영 — 동환님의 프로필에 최적화된 채용 기준
3. 기술적 gap이 상대적으로 작음 (SSL을 이해하면 됨 vs NF 이론 전체를 새로 배워야 함)
4. UIUC ↔ Meta 학술 네트워크 활용 가능
5. 3월 시점의 late-cycle posting = 경쟁이 덜할 수 있음
6. Advisor (Ismini Lourentzou)가 Meta와 접점이 있을 수 있음 — 확인 필요

### 📌 2순위 추천: Apple MLR (Shuangfei Zhai)

**이유:**
1. NF가 generative AI의 새로운 frontier — 이 분야를 지금 진입하면 선점 효과
2. 팀의 연구 생산성이 매우 높아 publication 가능성 큼
3. 단, NF에 대한 기초부터 준비해야 하므로 시간 투자 많이 필요

---

# PART 4: 지원 전 구체적 액션 플랜

## A. 두 포지션 공통 준비사항

### [즉시 — 이번 주 안에]

1. **CV에 Technical Skills 섹션 추가**
   - `Python, C/C++, Java | PyTorch | CUDA (if applicable) | Docker, Git, Slurm, W&B | Multi-GPU training`
   - 이전 보고서에서도 3인 합동으로 "Critical"로 지적된 사항

2. **Research Statement 다듬기**
   - 현재: "3D/4D vision and generative modeling" (너무 광범위)
   - 개선안: *"I study how geometric insights in weight space and latent space can make generative models more efficient and controllable — from model merging to reward-guided editing to video tokenization."*
   - 이 한 문장이 Apple과 Meta 모두에게 coherent한 narrative를 제공

3. **PyraTok에서의 본인 기여 정리**
   - 5저자이므로 "내가 구체적으로 뭘 했는지"를 2-3문장으로 정리
   - 인터뷰에서 반드시 물어볼 것임

4. **DM 초안 작성**
   - 두 분 모두 "DM으로 연락하라"고 했으므로, Twitter/X DM 초안을 준비

### [1-2주 안에]

5. **GitHub에 코드 정리**
   - RewardFlow, Model Stock 코드가 공개되어 있는지 확인
   - 없다면 최소한 개인 GitHub에 연구 관련 코드 정리

6. **Advisor와 상의**
   - Ismini Lourentzou 교수님에게 두 포지션 공유
   - Meta/Apple과의 네트워크가 있는지 확인
   - 추천서 또는 introduction 가능한지 문의

---

## B. Apple MLR 전용 준비사항

### [DM 보내기 전 — 1-2주 준비]

1. **Normalizing Flow 기초 학습** (가장 중요)
   - 교재: [Normalizing Flows for Probabilistic Modeling and Inference](https://arxiv.org/abs/1912.02762) (Papamakarios et al. 리뷰 논문)
   - 핵심 개념: Change of variables formula, Jacobian determinant, coupling layers, autoregressive flows, MAF vs IAF
   - TarFlow 논문 4편 정독 (최소 Paper 1, 2는 수식까지 완전히 이해)
   - **ml-tarflow 코드를 직접 돌려보기** ([github.com/apple/ml-tarflow](https://github.com/apple/ml-tarflow))

2. **NF와 Diffusion Model의 관계 이해**
   - Flow Matching (Lipman et al.) vs Normalizing Flows의 차이점
   - Continuous Normalizing Flows (Neural ODE 기반) vs Discrete NF (TarFlow)
   - "왜 NF가 diffusion보다 이론적으로 우월한가"를 설명할 수 있어야 함

3. **DM 메시지 초안 (Apple)**

   ```
   Hi Dr. Zhai, I'm Dong-Hwan Jang, a first-year CS PhD student at UIUC
   (advised by Prof. Ismini Lourentzou). I saw your post about the summer
   research internship in Normalizing Flows at Apple MLR.

   Your TarFlow line of work is fascinating — I've been reading through all
   four papers and was particularly struck by how STARFlow-V's invertible
   structure enables multi-task video generation.

   My research is in generative modeling and model efficiency:
   - RewardFlow (CVPR'26): reward-guided image editing via Langevin dynamics
     on diffusion models
   - Model Stock (ECCV'24 Oral): geometric insights in weight space for
     efficient fine-tuning (24x cost reduction)
   - PyraTok (CVPR'26): language-aligned pyramidal video tokenizer

   I'm excited about applying [specific idea connecting your work to TarFlow].
   Would you be open to chatting about the internship?

   [Homepage link] | [Google Scholar link]
   ```

   > ⚠️ `[specific idea]` 부분을 반드시 구체적으로 채울 것. 예시:
   > - "reward-guided sampling techniques to normalizing flows"
   > - "the connection between weight space geometry and flow-based latent spaces"
   > - "extending TarFlowLM's continuous-space approach to video-language modeling"

4. **예상 인터뷰 질문 준비**

   - "Normalizing Flow의 change-of-variables formula를 설명해주세요. Jacobian determinant를 효율적으로 계산하는 방법은?"
   - "MAF와 IAF의 차이는? TarFlow는 왜 MAF 기반인가요?"
   - "Diffusion model과 NF의 이론적 차이를 설명해주세요. 각각의 trade-off는?"
   - "TarFlow를 읽고 가장 인상적이었던 contribution은? 개선할 수 있는 부분이 있다면?"
   - "RewardFlow의 Langevin dynamics를 NF의 sampling에 적용할 수 있을까요?"
   - "Model Stock의 weight space geometry가 NF 훈련에 어떤 insight를 줄 수 있나요?"

---

## C. FAIR/Meta 전용 준비사항

### [DM 보내기 전 — 1주 준비]

1. **Self-supervised Learning 기초 복습**
   - JEPA 계열: I-JEPA → V-JEPA → V-JEPA 2 → VL-JEPA
   - Contrastive learning: CLIP → MetaCLIP → MetaCLIP 2
   - Non-contrastive: BYOL, VICReg, Barlow Twins
   - 핵심 질문: "왜 JEPA가 contrastive learning보다 world model에 적합한가?"

2. **MetaCLIP 논문 정독** (Hu Xu의 flagship)
   - [MetaCLIP: Demystifying CLIP Data](https://arxiv.org/abs/2309.16671)
   - 핵심 이해: metadata-driven curation이 왜 random filtering보다 우월한가
   - "이 아이디어를 비디오에 적용한다면?"이라는 질문에 답할 수 있어야 함

3. **V-JEPA 2 논문 읽기**
   - Self-supervised video pretraining의 최신 SOTA
   - Representation space 예측 vs pixel 예측의 차이

4. **DM 메시지 초안 (FAIR)**

   ```
   Hi Dr. Xu, I'm Dong-Hwan Jang, a first-year CS PhD student at UIUC
   (advised by Prof. Ismini Lourentzou). I saw your post about the 2026
   summer internship on video pretraining at FAIR.

   I've been working on video-related generative modeling and your MetaCLIP
   line of work deeply resonates with my research perspective:

   - PyraTok (CVPR'26): language-aligned pyramidal tokenizer for 4K/8K
     video — I think the tokenization/data representation choices are as
     critical as the model architecture, which aligns with your data-centric
     research philosophy
   - RewardFlow (CVPR'26): reward-guided image editing via Langevin dynamics
   - Model Stock (ECCV'24 Oral): efficient fine-tuning through weight space
     geometry

   I'm particularly interested in how MetaCLIP's data curation insights
   could be extended to video pretraining — the right video data distribution
   might be as transformative for video models as MetaCLIP was for CLIP.

   Would love to chat about the internship opportunity.

   [Homepage link] | [Google Scholar link]
   ```

5. **예상 인터뷰 질문 준비**

   - "MetaCLIP의 핵심 insight가 뭔가요? 왜 데이터 큐레이션이 아키텍처보다 중요한가요?"
   - "비디오 데이터 큐레이션은 이미지와 어떻게 다른가요? 시간 차원이 추가됨으로써 어떤 새로운 문제가 생기나요?"
   - "JEPA vs contrastive learning — 각각의 장단점을 설명해주세요."
   - "PyraTok에서 당신의 구체적 기여는 무엇이었나요?"
   - "World model이란 무엇인가요? LLM과 어떻게 다른가요?"
   - "V-JEPA 2가 로봇에 zero-shot 전이가 가능한 이유를 설명해주세요."
   - "대규모 분산 학습 경험이 있나요? 어떤 규모의 학습을 해봤나요?"

---

## D. DM 발송 타이밍 전략

```
3/10(월) ~ 3/14(금): NF 기초 학습 + MetaCLIP 정독 + 코드 정리
3/14(금): Advisor 상담
3/15(토) ~ 3/16(일): DM 초안 최종 수정
3/17(월): FAIR (Hu Xu) DM 발송 ← 먼저 (더 fit이 좋고, late-cycle이므로 빨리)
3/18(화) ~ 3/21(금): NF 집중 학습 (TarFlow 코드 실행 포함)
3/22(월): Apple MLR (Shuangfei Zhai) DM 발송
```

> **왜 FAIR 먼저?** Late-cycle posting이라 자리가 빨리 채워질 수 있음. Apple은 "still have one opening"이라 했지만 트윗 날짜가 금요일이므로 아직 여유 있을 수 있음. 하지만 둘 다 빠르게 움직여야 함.

---

# PART 5: 리스크 분석

## 최악의 시나리오와 대비

| 시나리오 | 확률 | 대응 |
|---------|------|------|
| 두 곳 모두 이미 자리 채워짐 | 중간 | 이미 보낸 DM 자체가 2027 Summer 네트워킹. NF/video pretraining 학습은 연구에 도움. |
| Apple DM 무응답 | 높음 | Apple은 보수적. 2주 후 follow-up 1회. 그래도 안 되면 2027 준비. |
| FAIR 인터뷰 → NF 질문 나옴 | 낮음 | FAIR은 NF를 하지 않음. Video pretraining/SSL 위주 준비하면 됨. |
| 둘 다 합격 | 낮음 | FAIR 선택 추천 (fit 더 좋고, world model은 장기적으로 더 큰 연구 방향) |
| DM 후 1주 안에 인터뷰 잡힘 | 중간 | 이번 주부터 준비 시작해야 하는 이유 |

## 현실 체크

- **시기적 한계:** 2026 Summer 인턴 대부분은 2025년 가을에 모집 마감. 두 트윗 모두 "아직 자리 있다"는 것은 late opening/특수 상황.
- **경쟁 강도:** 트위터 공개 포스팅이므로 많은 PhD 학생이 DM을 보낼 것. 차별화가 핵심.
- **가장 큰 차별화:** 논문 수 자체가 아니라, **"왜 내가 이 프로젝트에 적합한 사람인가"**에 대한 구체적 아이디어가 있느냐.

---

# PART 6: 종합 권고사항

## Top 3 즉시 실행 액션

1. **🔴 이번 주 안에 Advisor 상담** — 두 포지션 공유, 네트워크 확인, introduction 가능성 타진
2. **🔴 1주 안에 FAIR DM 발송** — MetaCLIP 논문 읽고, 비디오 데이터 큐레이션에 대한 concrete idea 하나를 DM에 포함
3. **🟡 2주 안에 Apple DM 발송** — TarFlow 코드를 직접 돌려보고, NF에 대한 최소한의 이해를 바탕으로 DM

## 장기적 관점

두 포지션 모두에 떨어지더라도, 이 준비 과정에서 얻는 것:

- **Normalizing Flows 이해** → 2027 지원 시 Apple/기타 NF 연구 팀에 진입 가능
- **SSL/JEPA 이해** → Video understanding 연구의 기초 (본인 연구에도 직접 도움)
- **MetaCLIP 방법론** → 데이터 큐레이션 관점은 어떤 ML 연구에서든 강력한 무기
- **네트워킹** → DM을 보낸 것 자체가 2027 Summer의 기반

---

*본 보고서는 공개된 논문, 트위터 포스팅, 개인 홈페이지, Google Scholar 정보를 바탕으로 작성되었습니다. 실제 채용 결정은 다양한 요인에 의해 좌우되며, 본 분석은 준비 방향 제시를 목적으로 합니다.*

## References

### Apple MLR Papers
- [TarFlow: Normalizing Flows are Capable Generative Models](https://arxiv.org/abs/2412.06329) (ICML 2025 Oral)
- [STARFlow: Scaling Latent Normalizing Flows](https://arxiv.org/abs/2506.06276) (NeurIPS 2025 Spotlight)
- [TarFlowLM: Flexible Language Modeling with Flows](https://arxiv.org/abs/2507.00425)
- [STARFlow-V: Video Generative Modeling with NFs](https://arxiv.org/abs/2511.20462)
- [Apple ML TarFlow Code](https://github.com/apple/ml-tarflow)
- [Apple ML STARFlow Code](https://github.com/apple/ml-starflow)

### FAIR/Meta References
- [MetaCLIP: Demystifying CLIP Data](https://arxiv.org/abs/2309.16671) (ICLR 2024 Spotlight)
- [V-JEPA 2](https://arxiv.org/abs/2506.09985)
- [Perception Encoder](https://ai.meta.com/blog/perception-encoder/)
- [Movie Gen](https://arxiv.org/abs/2410.13720)
- [Hu Xu — AI at Meta](https://ai.meta.com/people/776198281361276/hu-xu/)
- [Hu Xu Homepage](https://howardhsu.github.io/)

### Background References
- [LeCun's AMI Labs — MIT Technology Review](https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/)
- [World Models Race 2026 — Introl](https://introl.com/blog/world-models-race-agi-2026)
- [LeJEPA — Turing Post](https://www.turingpost.com/p/lejepa)
