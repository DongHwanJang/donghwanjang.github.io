# 인턴십 포지션 심층 분석 보고서

## 4개 포지션 통합 분석

> 분석일: 2026-03-11 (업데이트)
> 대상: Dong-Hwan Jang (UIUC CS PhD 1년차, Advisor: Ismini Lourentzou)
> 분석 방식: 포지션별 전담 에이전트가 독립적으로 리서치 후 합동 평가

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

## 포지션 C: Google Research — VLM/MLLM 응용 연구 인턴

### 1. 팀 리더: Yaojie Liu

- **직책:** Senior Research Scientist, Google Research (2021년 6월~)
- **학력:** PhD, Michigan State University (advised by Xiaoming Liu)
- **Google Scholar:** ~3,000+ citations
- **배경:** PhD 시절 face anti-spoofing 분야에서 선구적 업적 (CVPR 2018: 765 citations). Google에서 Pixel Face Unlock 기술 주도 (Pixel 7~9 시리즈).
- **현재 방향:** face anti-spoofing에서 **범용 VLM/MLLM 연구로 전환**. 이번 인턴 공고는 face 분야가 아닌 **VLM/MLLM 응용**이 주제.
- **주요 협력자:** Wen-Sheng Chu (Google, Senior Staff Research Scientist), Deqing Sun (Google DeepMind)
- **연구 궤적:** Face anti-spoofing (PhD) → Google Pixel Face Unlock → **VLM/MLLM applications** (현재)

### 2. 공고의 3가지 연구 방향

> *"Both projects will be focused on VLM/MLLM applications with different angles."*

#### 방향 1: Fine-Grained Vision Reasoning 개선

VLM이 **미세한 시각 디테일을 이해하고 추론**하는 능력을 향상시키는 연구.

- **핵심 도전:** 현재 VLM은 전체 이미지를 요약하는 데는 뛰어나지만, 미묘한 차이(subtle difference), 공간 관계(spatial relation), 정밀한 시각 증거(fine-grained visual evidence)를 놓치는 경우가 많음
- **대표 벤치마크/논문:**
  - VER-Bench: fine-grained visual evidence 기반 추론 능력 평가
  - VLM-SubtleBench: 미묘한 차이를 비교 추론하는 능력 평가
  - SpatialVLM: VLM에 공간 추론 능력 부여
  - VLM-R3: Region Recognition, Reasoning, Refinement
- **응용:** 의료 영상 분석, 제품 결함 검출, 문서 이해, 위성 영상 해석 등

#### 방향 2: MLLM Capability Auditing

멀티모달 LLM의 능력을 **체계적으로 평가하고 벤치마킹**하는 프레임워크 연구.

- **핵심 도전:** MLLM이 "무엇을 잘하고 무엇을 못하는지"를 정밀하게 파악. 단순 accuracy가 아닌, vision skill 별 세분화된 능력 프로파일링
- **평가 차원:**
  - Foundation capabilities (perception, reasoning, grounding)
  - Model self-analysis (confidence calibration, hallucination detection)
  - Extended applications (domain-specific tasks)
  - Trustworthiness (robustness, safety, fairness)
- **대표 프레임워크:** MME-Survey, MMMU, per-sample evaluation criteria
- **Google의 맥락:** Gemini 등 자사 MLLM의 능력을 정밀하게 파악하고 개선 방향을 도출

#### 방향 3: Vision Skills Development

VLM에 **새로운 시각 능력을 가르치는** 방법론 연구.

- **핵심 도전:** Pre-trained VLM에 specific visual skill (e.g., counting, spatial reasoning, pixel-level perception)을 효과적으로 추가
- **접근법:**
  - SFT (Supervised Fine-Tuning) → RL 파이프라인
  - Instruction tuning for domain-specific visual skills
  - Chain-of-thought prompting for visual reasoning decomposition
  - Pixel-level perception 학습 (SimpleSeg: 포인트 예측으로 pixel-level VLM perception)
- **응용:** VLM에 새로운 "눈"을 주는 것 — 기존에 못 보던 것을 볼 수 있게 만드는 연구

### 3. 포지션의 맥락

- **형태:** Student Researcher Program (SRP), on-site Mountain View
- **기간:** Summer 2026 + **연장 가능** (프로젝트 완성까지)
- **규모:** 2명 모집 (두 프로젝트, 각각 다른 angle)
- **Google Research의 VLM 투자:** Gemini 시리즈의 급격한 발전 (Gemini 2.0 → 2.5), PaLI-X, PaliGemma 등 vision reasoning에 대한 대규모 투자
- **Yaojie Liu의 전문성 활용:** face anti-spoofing에서의 "미세한 시각 차이 판별" 경험이 범용 fine-grained vision reasoning으로 확장

---

## 포지션 D: Amazon FAR — Open-World Navigation 연구 인턴

### 1. 팀 구조: Amazon Frontier AI & Robotics (FAR)

#### 팀 배경
- **2024년 8월** Amazon이 Covariant의 공동창업자 3인 (Pieter Abbeel, Peter Chen, Rocky Duan) + 직원 ~25%를 acqui-hire ($222M 투자, ~$625M 기업가치)
- **미션:** Human-level robotic foundation models 구축
- Covariant의 "Covariant Brain" 기술 기반 — AI 기반 warehouse robotics (bin picking, sortation, depalletization)
- **2025년 12월** Abbeel이 Amazon의 LLM 조직(AGI) 헤드도 겸임
- **Holosoma** — humanoid robot용 sim-to-real 솔루션 발표

#### 두 명의 핵심 인물

**인물 1: Yunsheng Tian (채용 포스팅 작성자)**
- **직책:** Applied Scientist, Amazon FAR
- **학력:** PhD EECS, MIT CSAIL (advised by Wojciech Matusik, Computational Design & Fabrication Group)
- **이전:** MIT-IBM Watson AI Lab, Autodesk Research, MSRA 인턴
- **Google Scholar:** ~970 citations, ~19 publications
- **핵심 연구:** 로봇 조립 (assembly), Bayesian optimization, 소프트 로봇 설계

##### 주요 논문:
| 논문 | 학회 | 내용 |
|------|------|------|
| **Fabrica** | **CoRL 2025 (Outstanding Paper)** | 인간 시연 없이 범용 multi-part 조립을 달성하는 dual-arm 시스템 |
| **CRESt** | **Nature 2025** | LLM + Bayesian opt + 자율 로봇 결합한 AI 과학 발견 |
| **ASAP** | ICRA 2024 | 물리 기반 로봇 조립 시퀀스 자동 생성 |
| **BE-CBO** | ICML 2024 | 미지 제약 하 Bayesian 최적화 |
| **JoinABLe** | CVPR 2022 | Parametric CAD 조인트 학습 기반 조립 |
| **Assemble Them All** | SIGGRAPH Asia 2022 | 물리 기반 범용 조립 계획 |
| **Evolution Gym** | NeurIPS 2021 | 소프트 로봇 설계+제어 co-optimization 벤치마크 |

> **연구 궤적:** 시뮬레이션 → 실세계, 단일 최적화 → 범용 로봇 조작. Fabrica가 방향성의 정점 — **demonstration-free, generalizable robotic manipulation**.

**인물 2: Chen Feng (실제 채용 매니저로 추정)**
- **직책:** Associate Professor, NYU Tandon (Civil & Mechanical Engineering) + Amazon FAR 제휴
- **Google Scholar:** 10,692+ citations
- **소속:** AI4CE Lab 디렉터, NYU CREO 공동 창립 디렉터
- **학력:** PhD, University of Michigan; BEng, Wuhan University
- **수상:** NSF CAREER Award (2023)
- **핵심 연구:** 로봇 내비게이션, 인지, embodied AI

##### 주요 논문:
| 논문 | 학회 | 내용 |
|------|------|------|
| **CityWalker** | CVPR 2025 | 2,000+ 시간 웹 비디오로 도시 내비게이션 에이전트 훈련 |
| **Multiview Scene Graph** | NeurIPS 2024 | 멀티뷰 장면 그래프 |
| **Memorize What Matters** | NeurIPS 2024 Spotlight | Multi-traverse 장면 분해 |
| **NYC-Event-VPR** | ICRA 2025 | 이벤트 카메라 기반 시각적 위치 인식 |

> Chen Feng의 연구가 채용 포스팅과 1:1로 매핑됨: "open-world navigation" = Universal Navigation 연구, "Internet-scale data" = CityWalker의 웹 비디오 활용, "multi-modal foundation models" = vision+language+spatial reasoning 결합. 그의 학생 Xinhao Liu도 이미 Amazon FAR 인턴.

### 2. 채용 포스팅의 핵심 테마

```
"Open-world navigation in the era of robot foundation models and Internet-scale data"
```

#### 관심 분야 상세 (Foundation Model 앵글 중심)

**Multi-modal Foundation Models (비전+언어+공간 추론)**
- **VLA (Vision-Language-Action) 모델:** RT-2, π0, OpenVLA, DiffusionVLA — 시각 인지 + 언어 이해 + 로봇 행동을 통합
- **VLMaps/AVLMaps:** CLIP 등 multimodal feature를 3D 환경에 매핑하여 자연어 명령으로 navigation
- VLM의 시각적 이해력을 로봇 navigation의 semantic grounding에 활용

**Reasoning & Agency (LLM/VLM 기반 로봇 계획)**
- LLM을 high-level planner로 활용: 목표를 실행 가능한 action sequence로 분해
- ReWiND (2025): language-guided reward learning — LLM이 reward signal을 생성하여 policy 학습
- Inner Monologue: 로봇이 step-by-step으로 사고하며 행동하는 agentic 패턴

**Internet-Scale Data → Foundation Model Visual Priors**
- Foundation model의 핵심 이점: web-scale 이미지/비디오에서 학습한 visual prior를 scarce한 robot data에 전이
- **Navigation World Models (NWM, CVPR 2025):** Conditional Diffusion Transformer로 navigation action에 따른 미래 시각 관측 예측. Robot video + unlabeled egocentric footage로 학습
- **CityWalker (Chen Feng, CVPR 2025):** 2,000+ 시간 웹 비디오로 도시 navigation agent 훈련 — Internet-scale data의 직접 활용 사례
- NVIDIA GR00T Data Pyramid: real-world demo + synthetic data + internet video 계층적 학습

**Neural Rendering (NeRF/3DGS for Environment Representation)**
- NeRF: implicit neural representation으로 고품질 3D 장면 재구성. 장애물 회피를 위한 trajectory optimization에 활용
- 3D Gaussian Splatting (3DGS): NeRF 대비 15-20x 빠른 렌더링. Real-time robotic application에 적합
- SLAM + Rendering 융합: NuRF 등 radiance field 기반 robot localization

**Real-world Evaluation**
- Sim-to-real gap 줄이기: Real-is-Sim, SIMPLER-Env 프레임워크
- 시뮬레이션 훈련 → 실세계 검증의 체계적 파이프라인

### 3. FAR 팀의 위상

Pieter Abbeel은 로봇 학습 분야의 최고 권위자 중 한 명. Amazon이 $222M+ 규모의 acqui-hire를 했다는 것은 이 분야에 대한 Amazon의 강한 의지를 보여줌. Warehouse robotics라는 명확한 product path가 있으면서도 foundation model 수준의 기초 연구를 추구하는 독특한 포지션.

> **핵심 인사이트:** 이 포지션은 "순수 로봇공학"이 아니라 **"foundation model × navigation"**의 교차점. Multi-modal foundation model, VLA, world model, neural rendering 등 동환님의 연구와 연결 가능한 foundation model 앵글이 명확히 존재.

---

# PART 2: 동환님 적합도 평가

## 포지션 A 평가: Apple MLR — Normalizing Flows 팀

### 적합도 점수: B (Fit은 있으나 Gap이 큼)

#### 강점
1. **Generative model 경험:** RewardFlow (CVPR 2026)에서 diffusion model + Langevin dynamics를 다뤄 generative modeling 역량 입증
2. **Efficiency 철학 일치:** Model Stock (24x cost reduction), DynOPool (33% compression) — Apple MLR도 "simple and scalable" 강조
3. **Transformer 아키텍처 이해:** TarFlow는 Transformer 기반이므로 ViT 경험 직접 연관
4. **Strong publication record:** CVPR 2022 → ECCV 2024 Oral → CVPR 2026 x 2
5. **Video 관련 경험:** PyraTok (CVPR 2026)에서 비디오 토크나이저를 다뤄 STARFlow-V와 연결점 존재

#### 약점
1. **🔴 Normalizing Flow 경험 없음:** TarFlow 팀은 NF 전문가를 찾고 있으며, 동환님의 논문 중 NF를 직접 다룬 것이 없음
2. **🔴 Likelihood-based modeling 경험 부족:** NF의 핵심인 exact likelihood computation, change-of-variables formula, Jacobian 계산 등에 대한 직접 경험 불명확
3. **🟡 수학적 깊이 불확실:** TarFlow 논문은 universality proof 포함. 동환님 논문들은 실험적 성격이 강함
4. **🟡 Apple 팀과의 네트워크 없음:** Cold outreach 필요
5. **🟡 JAX 경험 불확실:** Apple MLR 일부 프로젝트가 JAX 사용

#### 가능 인턴 프로젝트
- NF를 새 modality (3D, audio)로 확장
- STARFlow-V의 비디오 생성 품질 개선 (PyraTok 경험 활용)
- Reward-guided sampling을 NF에 적용 (RewardFlow → TarFlow 이전)

---

## 포지션 B 평가: FAIR/Meta — Video Pretraining 팀

### 적합도 점수: B+ (Gap은 있지만 연결점이 더 많음)

#### 강점
1. **Video 연구 경험:** PyraTok (CVPR 2026)에서 4K/8K 비디오 토크나이저를 다뤘고, 비디오 프리트레이닝과 직접 연관
2. **Controllable generation:** RewardFlow의 reward-guided editing은 FAIR의 video generation 방향과 맞음
3. **대규모 프리트레이닝 이해:** Samsung 경험 (production 배포, OOD-robust fine-tuning)
4. **Weight space geometry:** Model Stock의 fine-tuning dynamics 분석은 프리트레이닝 연구자에게 매력적인 상보적 관점
5. **연구 우선 평가 기준에 유리:** FAIR이 "research를 우선시한 PhD"를 환영, CVPR 2026 두 편으로 충분
6. **UIUC-Meta 연결:** UIUC CS는 Meta/FAIR과 강한 학술 네트워크

#### 약점
1. **🟡 Self-supervised learning 논문 없음:** JEPA, contrastive learning 등 SSL 관련 직접 논문 부재
2. **🟡 대규모 데이터 큐레이션 경험 부족:** MetaCLIP 스타일의 web-scale 데이터 파이프라인 경험 없음
3. **🟡 PyraTok에서의 기여도:** 5저자이므로 개인 기여를 명확히 설명해야 함
4. **🟠 Robotics 경험 없음:** 포스팅에 "robotics" 언급되었지만 필수는 아님
5. **🟠 분산 학습 경험 불명확:** V-JEPA 2는 100만 시간 비디오로 훈련

#### 가능 인턴 프로젝트
- 비디오 데이터 큐레이션 방법론 (MetaCLIP의 비디오 버전)
- PyraTok 스타일 토크나이저를 Perception Encoder에 통합
- Video pretraining에서의 효율적 fine-tuning (Model Stock 아이디어 적용)
- Reward-guided video generation (RewardFlow + Movie Gen)

---

## 포지션 C 평가: Google Research — VLM/MLLM 응용 팀

### 적합도 점수: A- (강한 fit — 동환님의 연구와 가장 직접적으로 연결)

#### 강점

1. **🟢 PyraTok = VLM 핵심 인프라:** Language-aligned pyramidal video tokenization은 VLM이 비디오를 이해하는 방식의 근본 문제를 다룸. "Vision skills development" (VLM에 새로운 시각 능력 부여)와 직접 연결. Multi-scale hierarchical tokenization은 fine-grained visual detail 보존에 기여 → "fine-grained vision reasoning" 개선의 기반.
2. **🟢 Model Stock은 CLIP(VLM) 위에서 검증됨:** CLIP 기반 fine-tuning의 weight space geometry를 분석한 논문. Vision-language model의 adaptation에 대한 **직접적 경험과 이해**. MLLM capability auditing에서 "효율적 fine-tuning이 모델 능력에 미치는 영향"을 실험적으로 파악 가능.
3. **🟢 RewardFlow → VLM Alignment/RLHF:** Reward-guided generation 경험은 VLM의 reward-based fine-tuning (RLHF, DPO 등)과 자연스럽게 연결. "Vision skills development"에서 SFT→RL 파이프라인이 핵심 접근법 — RewardFlow의 reward signal 설계 경험이 직접 활용 가능.
4. **🟢 Advisor Ismini Lourentzou = VLM 전문가:** PLAN Lab (Perception and LANguage)을 운영. PRIMA (multi-image VLM reasoning segmentation), CoRe3D (collaborative 3D reasoning), commonsense-driven video moment retrieval 등 VLM 직접 연구. PyraTok 공저자. **추천서와 introduction 기대 가능** — 이것이 핵심 차별화 요소.
5. **🟢 Samsung OOD robustness → VLM capability auditing:** 모델의 robust한 동작을 다양한 조건에서 검증한 경험이 "MLLM capability auditing" (모델이 무엇을 잘하고 못하는지 체계적 평가)과 직접 연결.
6. **🟢 연구 방향 일치:** 동환님의 PhD trajectory (vision-language model 관련 연구)와 이 포지션의 VLM/MLLM 연구가 **정확히 같은 방향**. 인턴 경험이 PhD 연구에 직접 기여.

#### 약점

1. **🟡 VLM/MLLM 직접 논문 아직 없음:** PyraTok은 tokenizer, Model Stock은 fine-tuning 방법론. VLM의 reasoning이나 capability를 직접 다룬 1저자 논문은 아직 없음.
2. **🟡 Yaojie Liu 팀과의 네트워크 없음:** 하지만 Lourentzou 교수의 Google 네트워크를 통한 introduction 가능성 확인 필요.
3. **🟡 Fine-grained reasoning 벤치마크 직접 경험 없음:** VER-Bench, MMMU 등에 대한 실험 경험 부족. 하지만 학습 가능한 gap.
4. **🟡 PyraTok에서 5저자:** 개인 기여를 명확히 설명해야 함.

#### 가능 인턴 프로젝트

- **Fine-grained vision reasoning 개선:** Hierarchical visual representation (PyraTok의 multi-scale 접근)을 VLM에 적용하여 미세한 시각 디테일 추론 능력 향상
- **MLLM capability auditing 프레임워크:** Vision skill별 (spatial reasoning, counting, attribute recognition 등) 체계적 능력 평가 + 약점 기반 targeted improvement
- **Efficient VLM adaptation:** Model Stock의 weight space geometry insight를 대규모 MLLM fine-tuning에 적용 → 효율적 vision skill development
- **Reward-guided VLM improvement:** RewardFlow의 아이디어로 VLM의 vision reasoning을 reward signal 기반으로 개선 (SFT→RL 파이프라인)

#### 핵심 평가
이 포지션은 동환님의 연구 trajectory와 **가장 자연스럽게 연결되는** 선택지. PyraTok(VLM 인프라) + Model Stock(CLIP fine-tuning) + RewardFlow(reward-based improvement) + Lourentzou 교수(VLM 전문가)의 조합이 공고의 3가지 방향 모두와 연결됨. **강력 추천** — 특히 인턴 경험이 PhD 연구에 직접 기여할 가능성이 가장 높음.

---

## 포지션 D 평가: Amazon FAR — Open-World Navigation 팀

### 적합도 점수: B- (Foundation model 앵글에서 연결점 존재, 하지만 robotics gap이 큼)

#### 강점

1. **🟢 PyraTok → Robot Egocentric Video Tokenization:** Multi-scale hierarchical tokenization이 로봇 1인칭 시점 비디오 처리에 활용 가능. Navigation에서 near/far feature를 다른 해상도로 포착하는 것은 PyraTok의 pyramidal 접근과 직접 연결. VLA 모델의 video tokenization은 현재 핵심 병목 (FAST, VQ-VLA 등 action tokenizer 연구 활발).
2. **🟢 Model Stock → Efficient VLA/VLM Deployment:** 로봇 온보드 추론을 위해 대규모 foundation model을 효율적으로 배포해야 함. Model Stock의 24x cost reduction 아이디어가 VLA model adaptation에 직접 적용 가능. DiVLA-2B 같은 distilled VLA가 82Hz로 동작 — 이런 효율화가 핵심 과제.
3. **🟢 RewardFlow → Reward-Guided Policy Improvement:** ReWiND (2025): LLM이 reward signal을 생성하여 robot policy 학습. RewardFlow의 reward-guided generation 경험이 navigation policy의 reward 설계에 연결. Language-guided reward는 이 분야의 최신 트렌드.
4. **🟡 3D/4D Vision 관심:** Neural rendering (NeRF/3DGS)과의 간접 연결. 동환님의 research interest에 3D/4D vision이 포함.
5. **🟡 Foundation Model 시대 이해:** 대규모 모델 학습/활용 경험. Internet-scale data 활용 패러다임 이해.
6. **🟡 Pieter Abbeel 팀 네트워크:** 커리어에 큰 자산. Robotics foundation model은 향후 5년간 폭발적 성장 예상.

#### 약점

1. **🔴 Robotics/Navigation 직접 경험 전무:** 이것이 여전히 핵심 gap. Navigation, SLAM, motion planning, robot control 등 경험 없음.
2. **🔴 Embodied AI 경험 없음:** VLA 모델을 실제 로봇에 배포한 경험, sim-to-real 전이 경험 부재.
3. **🟡 VLA 모델 경험 없음:** RT-2, π0, OpenVLA 등 VLA 아키텍처에 대한 직접 경험 필요.
4. **🟡 분야 전환 비용 큼:** Robotics는 하드웨어, 시뮬레이터 등 자체 기술 스택이 있어 3개월로 성과 내기 도전적.

#### 가능 인턴 프로젝트

- **Video tokenization for navigation:** PyraTok의 multi-scale 접근을 robot egocentric video에 적용 → 효율적 VLA input representation
- **Efficient VLA model adaptation:** Model Stock 기법으로 대규모 VLA를 로봇 온보드 inference에 최적화
- **Reward-guided navigation policy:** Language-guided reward signal 설계 (RewardFlow 경험 이전) → navigation policy 개선
- **World model compression:** Navigation World Model의 효율화 → real-time visual foresight planning

#### 핵심 평가
순수 robotics로 보면 gap이 크지만, **"foundation model × navigation"**의 교차점에서 보면 동환님의 VLM/generative model 경험이 활용될 여지가 있음. 특히 video tokenization, model efficiency, reward-guided generation은 이 분야에서 현재 가장 필요한 기술. **선택적 지원 추천** — 상위 3곳(FAIR, Google, Apple) 우선 후, 여력이 있으면 지원.

---

# PART 3: 종합 비교 — 어디에 지원해야 하는가?

## 4개 포지션 직접 비교표

| 평가 항목 | A: Apple MLR (NF) | B: FAIR/Meta (Video) | C: Google (VLM/MLLM) | D: Amazon FAR (Navigation) |
|-----------|:-:|:-:|:-:|:-:|
| **Research fit** | B | B+ | **A-** | B- |
| **Publication 가능성** | A | A | A- | B+ |
| **기술 준비도** | B- | B | **B+** | C+ |
| **네트워크 접근성** | C | B+ | **B+** (Lourentzou→Google) | B- |
| **채용 프로세스** | 불명확 | 유리 | **유리** (SRP, 연장 가능) | 보통 |
| **커리어 임팩트** | A | A | **A** (VLM은 현재 가장 뜨거운 분야) | B+ |
| **인턴 문화** | B+ | A | A- | A- |
| **PhD 연구 시너지** | B+ | A- | **A** (VLM = 동환님 연구 방향) | B- |
| **종합 점수** | **B** | **A-** | **A-** | **B-** |

## 최종 순위 및 권고

### 🏆 공동 1순위: Google Research (Yaojie Liu) — 강력 추천

**이유:**
1. **VLM/MLLM이 동환님의 연구 trajectory와 정확히 일치.** PyraTok(language-aligned tokenizer) + Model Stock(CLIP fine-tuning) + RewardFlow(reward-guided → RLHF) = 공고의 3가지 방향 모두와 연결
2. **Advisor Ismini Lourentzou가 VLM 전문가.** PLAN Lab에서 PRIMA, CoRe3D 등 VLM 직접 연구. PyraTok 공저자. Introduction & 추천서 가능성 — **다른 포지션에 없는 핵심 차별화**
3. **SRP 형태로 연장 가능** — 프로젝트 완성까지 일할 수 있어 publication 가능성 높음
4. **인턴 경험이 PhD 연구에 직접 기여** — VLM reasoning, capability auditing은 동환님의 PhD thesis 방향에 직접 활용 가능
5. **기술 준비도가 가장 높음** — NF 이론 학습이나 SSL 학습 없이, 기존 경험을 거의 그대로 활용 가능

### 🏆 공동 1순위: FAIR/Meta (Hu Xu) — 강력 추천

**이유:**
1. PyraTok의 비디오 경험이 직접적 연결점
2. "연구 우선 PhD"를 환영하는 명시적 채용 기준 — 동환님 프로필에 최적화
3. UIUC ↔ Meta 학술 네트워크 활용 가능
4. Late-cycle posting = 경쟁이 덜할 수 있음
5. World model은 AI의 다음 패러다임 — PhD 연구에 직접 도움
6. FAIR의 연구 문화와 publication 실적이 탁월

### 📌 3순위: Apple MLR (Shuangfei Zhai) — 조건부 추천

**이유:**
1. NF가 generative AI의 새로운 frontier — 선점 효과
2. 팀의 연구 생산성이 매우 높아 publication 가능성 큼
3. 단, NF 이론 기초부터 준비해야 하므로 시간 투자 많이 필요
4. RewardFlow/PyraTok 경험을 NF에 연결하는 concrete idea가 필수

### 📎 4순위: Amazon FAR (Yunsheng Tian / Chen Feng) — 선택적 지원

**이유:**
1. Foundation model × navigation의 교차점에서 연결점 존재 (video tokenization, model efficiency, reward-guided policy)
2. Pieter Abbeel 팀 네트워크는 장기적 가치
3. 단, robotics 직접 경험 부재가 핵심 gap — 다른 robotics-native 후보 대비 약함
4. 상위 3곳 지원 후 여력이 있으면 지원

---

# PART 4: 지원 전 구체적 액션 플랜

## A. 공통 준비사항 (즉시)

### [이번 주 안에]

1. **CV에 Technical Skills 섹션 추가**
   - `Python, C/C++, Java | PyTorch | CUDA (if applicable) | Docker, Git, Slurm, W&B | Multi-GPU training`

2. **Research Statement 다듬기**
   - 현재: "3D/4D vision and generative modeling" (너무 광범위)
   - 개선안: *"I study how geometric insights in weight space and latent space can make vision-language models more efficient and controllable — from model merging to reward-guided editing to video tokenization."*
   - **VLM을 중심 키워드로** — Google, FAIR 모두에 통함

3. **PyraTok에서의 본인 기여 정리** — 5저자이므로 구체적 기여를 2-3문장으로

4. **Advisor와 즉시 상의** — Ismini Lourentzou 교수님에게:
   - 4개 포지션 공유
   - **특히 Yaojie Liu (Google)와의 네트워크 확인** — PLAN Lab이 VLM 연구하므로 접점 가능성 높음
   - Meta/Apple 네트워크도 확인
   - Introduction 또는 추천서 가능한지 문의

### [1-2주 안에]

5. **GitHub에 코드 정리** — RewardFlow, Model Stock 코드 공개 여부 확인

---

## B. Google Research 전용 준비사항 (NEW — 최우선)

### [즉시 시작 — 1주 안에 연락]

1. **VLM/MLLM 주요 벤치마크 파악**
   - Fine-grained reasoning: VER-Bench, VLM-SubtleBench, MMMU, MMBench
   - Capability auditing: MME, LMMs-Eval, SEED-Bench
   - "현재 MLLM이 가장 약한 vision skill은 무엇인가?"에 대한 자기 의견 형성

2. **Fine-grained vision reasoning 최신 논문 2-3편 정독**
   - SpatialVLM: 공간 추론 능력 부여
   - SimpleSeg: pixel-level VLM perception
   - VLM-R3: Region Recognition, Reasoning, Refinement

3. **Ismini Lourentzou 교수에게 Yaojie Liu introduction 요청**
   - Lourentzou의 PLAN Lab이 VLM reasoning을 연구하므로 학술 네트워크에 있을 가능성 높음
   - 없더라도 Google SRP 지원 경로는 공개 링크로 가능

4. **이메일/LinkedIn 메시지 초안 (Google)**

   ```
   Hi Dr. Liu, I'm Dong-Hwan Jang, a first-year CS PhD student at UIUC
   (advised by Prof. Ismini Lourentzou, PLAN Lab). I saw your LinkedIn post
   about the Summer 2026 Student Researcher positions on VLM/MLLM applications.

   My research directly aligns with your three focus areas:

   - PyraTok (CVPR'26): language-aligned pyramidal video tokenizer that
     preserves fine-grained visual detail across multiple spatiotemporal
     scales — relevant to improving fine-grained vision reasoning in VLMs
   - Model Stock (ECCV'24 Oral): efficient VLM adaptation through weight
     space geometry (24x cost reduction), validated on CLIP — relevant to
     efficient vision skills development
   - RewardFlow (CVPR'26): reward-guided image editing via Langevin dynamics
     — relevant to reward-based VLM improvement (SFT→RL pipeline)

   My advisor's lab (PLAN Lab) focuses on vision-language models with
   limited supervision, and I'm particularly interested in [specific idea,
   e.g., "how hierarchical visual representations can systematically improve
   MLLM fine-grained reasoning capabilities"].

   I've also applied through the official SRP link. Would love to discuss
   further.

   [Homepage link] | [Google Scholar link]
   ```

   > **핵심:** Lourentzou의 PLAN Lab을 명시하여 VLM 연구 환경에서 훈련받고 있음을 강조

5. **예상 인터뷰 질문**
   - "현재 VLM/MLLM의 가장 큰 약점은? Fine-grained reasoning에서 무엇이 부족한가?"
   - "MLLM capability auditing을 어떻게 설계하겠나? 어떤 차원으로 능력을 분류?"
   - "PyraTok의 multi-scale tokenization이 VLM의 fine-grained reasoning을 어떻게 도울 수 있나?"
   - "Model Stock의 접근을 MLLM fine-tuning에 적용하면 어떤 이점이 있나?"
   - "VLM에 새로운 vision skill을 가르치는 가장 효과적인 방법은? SFT vs RL vs instruction tuning?"
   - "PyraTok에서 당신의 구체적 기여는 무엇이었나?"
   - "Reward-guided approach가 VLM alignment에 어떻게 적용될 수 있나?"

6. **공식 지원도 병행** — https://lnkd.in/gAv5MpKV 링크로 SRP 공식 지원

---

## C. FAIR/Meta 전용 준비사항

### [DM 보내기 전 — 1주 준비]

1. **Self-supervised Learning 기초 복습**
   - JEPA 계열: I-JEPA → V-JEPA → V-JEPA 2 → VL-JEPA
   - Contrastive: CLIP → MetaCLIP → MetaCLIP 2
   - Non-contrastive: BYOL, VICReg, Barlow Twins
   - 핵심: "왜 JEPA가 contrastive learning보다 world model에 적합한가?"

2. **MetaCLIP 논문 정독** (Hu Xu의 flagship)
   - [MetaCLIP: Demystifying CLIP Data](https://arxiv.org/abs/2309.16671)
   - 핵심: metadata-driven curation이 왜 우월한가
   - "이 아이디어를 비디오에 적용한다면?"에 답할 수 있어야 함

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

5. **예상 인터뷰 질문**
   - "MetaCLIP의 핵심 insight가 뭔가요?"
   - "비디오 데이터 큐레이션은 이미지와 어떻게 다른가요?"
   - "JEPA vs contrastive learning 장단점?"
   - "PyraTok에서 당신의 구체적 기여는?"
   - "World model이란 무엇인가요? LLM과 어떻게 다른가요?"

---

## D. Apple MLR 전용 준비사항

### [DM 보내기 전 — 1-2주 준비]

1. **Normalizing Flow 기초 학습** (가장 중요)
   - 교재: [Normalizing Flows for Probabilistic Modeling and Inference](https://arxiv.org/abs/1912.02762) (Papamakarios et al.)
   - 핵심: Change of variables formula, Jacobian determinant, coupling layers, MAF vs IAF
   - TarFlow 논문 4편 정독 (최소 Paper 1, 2는 수식까지 완전히 이해)
   - **ml-tarflow 코드를 직접 돌려보기**

2. **NF와 Diffusion Model의 관계 이해**
   - Flow Matching vs Normalizing Flows의 차이점
   - CNF (Neural ODE) vs Discrete NF (TarFlow)
   - "왜 NF가 diffusion보다 이론적으로 우월한가" 설명 가능해야 함

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

   > `[specific idea]` 예시:
   > - "reward-guided sampling techniques to normalizing flows"
   > - "the connection between weight space geometry and flow-based latent spaces"
   > - "extending TarFlowLM's continuous-space approach to video-language modeling"

4. **예상 인터뷰 질문**
   - "NF의 change-of-variables formula를 설명해주세요. Jacobian을 효율적으로 계산하는 방법은?"
   - "MAF와 IAF의 차이는? TarFlow는 왜 MAF 기반인가요?"
   - "Diffusion model과 NF의 이론적 차이를 설명해주세요."
   - "TarFlow에서 가장 인상적이었던 contribution은? 개선할 수 있는 부분은?"
   - "RewardFlow의 Langevin dynamics를 NF sampling에 적용할 수 있을까요?"

---

## E. Amazon FAR 전용 준비사항 (선택적)

### [상위 3곳 지원 후 — 여력이 있을 때]

1. **VLA 모델 기초 학습**
   - RT-2, π0, OpenVLA, DiffusionVLA 중 1-2편 읽기
   - Action tokenization: FAST, VQ-VLA
   - "VLA 모델에서 video tokenization이 왜 중요한가?"에 답할 수 있어야 함

2. **Navigation World Models 논문 읽기**
   - Navigation World Models (NWM, CVPR 2025)
   - CityWalker (Chen Feng, CVPR 2025)

3. **이메일 초안 (Amazon FAR)**

   ```
   Subject: [FAR Intern - Navigation] Dong-Hwan Jang, UIUC

   Dear Dr. Tian and Dr. Feng,

   I'm a first-year CS PhD student at UIUC (advised by Prof. Ismini
   Lourentzou, PLAN Lab). I'm writing about the Summer 2026 research
   intern position on open-world navigation at Amazon FAR.

   My research focuses on efficient vision-language models and video
   understanding:

   - PyraTok (CVPR'26): language-aligned pyramidal video tokenizer —
     multi-scale video representation that could benefit egocentric
     video processing for navigation
   - Model Stock (ECCV'24 Oral): efficient VLM adaptation (24x cost
     reduction on CLIP) — relevant to deploying foundation models on
     robot platforms
   - RewardFlow (CVPR'26): reward-guided generation via Langevin
     dynamics — connects to language-guided reward design for
     navigation policies

   I'm particularly interested in the multi-modal foundation model
   angle of your work, especially how efficient video representation
   and reward-guided approaches can improve navigation agents.

   Maximum availability: [dates]

   [Homepage link] | [CV attached]
   ```

4. **예상 인터뷰 질문**
   - "VLA 모델이란? RT-2와 π0의 차이는?"
   - "Internet-scale data가 navigation에 어떻게 도움이 되나?"
   - "PyraTok의 multi-scale tokenization을 robot egocentric video에 어떻게 적용?"
   - "Model Stock을 VLA 모델에 적용하면?"
   - "NeRF/3DGS를 navigation에 어떻게 활용할 수 있나?"

---

## F. DM/이메일 발송 타이밍 전략 (최종)

```
3/11(화) ~ 3/13(목): VLM 벤치마크 파악 + MetaCLIP 정독 + 공식 SRP 지원
3/13(목) ~ 3/14(금): Advisor 상담 (Yaojie Liu 네트워크 확인 필수!)
3/15(토) ~ 3/16(일): DM/이메일 초안 최종 수정
3/17(월): Google (Yaojie Liu) 이메일/LinkedIn 발송 ← 가장 fit 좋음 + SRP 연장 가능
3/17(월): FAIR (Hu Xu) DM 발송 ← 동시 발송, late-cycle이므로 빨리
3/18(화) ~ 3/21(금): NF 집중 학습 (TarFlow 코드 실행)
3/22(월): Apple MLR (Shuangfei Zhai) DM 발송
3/24(수): Amazon FAR 이메일 발송 (optional, 여력 있을 때)
```

> **Google과 FAIR을 같은 날 발송하는 이유:** 둘 다 fit이 좋고, late-cycle이므로 빨리 움직여야 함. Google은 SRP 공식 지원도 병행해야 하므로 더 빠르게.

---

# PART 5: 리스크 분석

## 최악의 시나리오와 대비

| 시나리오 | 확률 | 대응 |
|---------|------|------|
| Google/FAIR 모두 이미 자리 채워짐 | 중간 | 연락 자체가 2027 네트워킹. VLM/SSL 학습은 PhD 연구에 직접 도움 |
| Yaojie Liu가 결국 face 관련 프로젝트만 제안 | 낮음 | 공고 자체가 VLM/MLLM 응용이므로 가능성 낮음. 제안 받으면 VLM 앵글에서 approach 가능 |
| Apple DM 무응답 | 높음 | Apple은 보수적. 2주 후 follow-up 1회 |
| 3곳 이상 합격 | 매우 낮음 | Google ≈ FAIR 중 선택. PhD 연구 시너지 기준으로 결정 |
| DM 후 1주 안에 인터뷰 잡힘 | 중간 | 이번 주부터 준비 시작해야 하는 이유 |
| Lourentzou 교수가 Yaojie Liu와 접점 없음 | 중간 | LinkedIn으로 직접 연락 + SRP 공식 지원 경로 병행 |

## 현실 체크

- **시기적 한계:** 2026 Summer 인턴 대부분은 2025년 가을에 모집 마감. 모든 포스팅이 "아직 자리 있다"는 특수 상황.
- **경쟁 강도:** 공개 포스팅이므로 많은 PhD 학생이 연락할 것. 차별화가 핵심.
- **가장 큰 차별화:** "왜 내가 이 프로젝트에 적합한 사람인가"에 대한 concrete idea + **advisor의 VLM 연구 배경**.
- **Google SRP의 장점:** 연장 가능하므로 publication까지 이어갈 수 있음 — 다른 포지션에 없는 강점.

---

# PART 6: 종합 권고사항

## Top 4 즉시 실행 액션

1. **🔴 즉시: Advisor 상담** — 4개 포지션 공유. **특히 Yaojie Liu와의 네트워크 확인이 최우선.** Lourentzou 교수의 VLM 연구 배경이 가장 큰 무기.
2. **🔴 이번 주: Google SRP 공식 지원** — https://lnkd.in/gAv5MpKV 링크로 즉시 지원 (이건 DM과 별개)
3. **🔴 3/17: Google 이메일 + FAIR DM 동시 발송** — VLM 벤치마크와 MetaCLIP 논문 읽은 후
4. **🟡 3/22: Apple DM 발송** — TarFlow 최소 이해 확보 후

## 전략 요약

| 포지션 | 순위 | Fit | 지원 여부 | 핵심 무기 |
|--------|:----:|:---:|:---------:|----------|
| **Google Research** | **1** | **A-** | **필수** | PyraTok + Model Stock(CLIP) + Lourentzou(VLM 전문가) |
| **FAIR/Meta** | **1** | **A-** | **필수** | PyraTok + 연구 우선 문화 + UIUC-Meta 네트워크 |
| **Apple MLR** | **3** | **B** | **추천** | RewardFlow + Model Stock + video 경험 |
| **Amazon FAR** | **4** | **B-** | **선택적** | Foundation model 앵글 + Pieter Abbeel 네트워크 |

## 장기적 관점

모든 곳에 떨어지더라도 이 준비 과정에서 얻는 것:

- **VLM/MLLM 벤치마크 이해** → PhD 연구에 즉시 활용 가능 (capability auditing은 어디서든 쓸 수 있는 방법론)
- **SSL/JEPA 이해** → Video understanding 연구의 기초
- **NF 이해** → 2027 지원 시 Apple/기타 NF 팀 진입 가능
- **VLA 모델 이해** → Robotics foundation model 분야의 기초
- **네트워킹** → 모든 연락이 2027 Summer의 기반

---

*본 보고서는 공개된 논문, LinkedIn/트위터 포스팅, 개인 홈페이지, Google Scholar, GitHub 정보를 바탕으로 작성되었습니다. 실제 채용 결정은 다양한 요인에 의해 좌우되며, 본 분석은 준비 방향 제시를 목적으로 합니다.*

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

### Google Research References
- [Yaojie Liu — Google Scholar](https://scholar.google.com/citations?user=YjG02pYAAAAJ)
- [Yaojie Liu — LinkedIn](https://www.linkedin.com/in/yaojie-liu-505008a6/)
- [VER-Bench: Evaluating MLLMs on Fine-Grained Visual Evidence](https://arxiv.org/abs/2508.04852)
- [SpatialVLM: Spatial Reasoning Capabilities for VLMs](https://spatial-vlm.github.io/)
- [SimpleSeg: Pixel-Level VLM Perception](https://arxiv.org/abs/2601.19228)
- [MME-Survey: Evaluation of Multimodal LLMs](https://arxiv.org/abs/2411.15296)
- [Google SRP Application Link](https://lnkd.in/gAv5MpKV)

### Amazon FAR References
- [Yunsheng Tian Personal Website](https://www.yunshengtian.com/)
- [Yunsheng Tian Google Scholar](https://scholar.google.com/citations?user=sf6RjM4AAAAJ)
- [Fabrica — CoRL 2025 Outstanding Paper](https://github.com/yunshengtian/Fabrica)
- [Chen Feng Homepage](https://simbaforrest.github.io/)
- [Chen Feng Google Scholar](https://scholar.google.com/citations?user=YeG8ZM0AAAAJ)
- [AI4CE Lab](https://ai4ce.github.io/)
- [CityWalker — CVPR 2025](https://github.com/ai4ce/CityWalker)
- [Amazon/Covariant acqui-hire (TechCrunch)](https://techcrunch.com/2024/08/31/amazon-hires-the-founders-of-robotics-ai-startup-covariant/)
- [Navigation World Models (CVPR 2025)](https://arxiv.org/abs/2412.03572)
- [DiffusionVLA (ICML 2025)](https://openreview.net/forum?id=VdwdU81Uzy)
- [ReWiND: Language-Guided Rewards](https://arxiv.org/abs/2505.10911)

### Background References
- [LeCun's AMI Labs — MIT Technology Review](https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/)
- [World Models Race 2026 — Introl](https://introl.com/blog/world-models-race-agi-2026)
- [Ismini Lourentzou — PLAN Lab](https://plan-lab.github.io/)
- [PyraTok (CVPR 2026)](https://arxiv.org/abs/2601.16210)
