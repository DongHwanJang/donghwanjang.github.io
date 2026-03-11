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

## 포지션 C: Google Research — Face Anti-Spoofing / VLM 연구 인턴

### 1. 팀 리더: Yaojie Liu

- **직책:** Research Scientist, Google Research
- **학력:** PhD, Michigan State University (advised by Xiaoming Liu — face anti-spoofing 분야 세계적 권위자)
- **Google Scholar:** ~3,000+ citations
- **핵심 연구:** Face anti-spoofing (presentation attack detection), domain generalization, VLM for biometrics
- **주요 업적:**
  - **Face Anti-Spoofing 분야 다수 논문** — CVPR, ICCV, NeurIPS, TPAMI 등
  - **Deep Tree Learning** (CVPR 2019) — face anti-spoofing을 위한 트리 구조 학습
  - **Disentangled representation** 기반 spoof detection
  - **Domain generalization** — 다양한 센서/환경에서 일반화하는 anti-spoofing
  - 최근 **VLM (Vision-Language Model)을 biometric security에 적용**하는 연구로 확장
- **연구 궤적:** Face anti-spoofing → Domain generalization → VLM for biometrics → Multimodal security

### 2. 연구 분야 상세

#### Face Anti-Spoofing (Presentation Attack Detection)
- 실제 얼굴 vs 사진/비디오/마스크 공격을 구분하는 기술
- 모바일 결제, 공항 보안, 신원 인증 등에 핵심
- 핵심 도전: **cross-domain generalization** — 학습하지 않은 새로운 센서/조명/공격 유형에 일반화

#### Domain Generalization 접근
- Source domain에서만 학습하고 unseen target domain에서 동작
- OOD (Out-of-Distribution) detection과 밀접한 관련
- Meta-learning, disentangled representation, adversarial training 등 활용

#### VLM for Biometrics (최근 방향)
- CLIP/LLaVA 등 대규모 VLM을 biometric security에 적용
- Zero-shot/few-shot face anti-spoofing
- 텍스트 프롬프트로 새로운 공격 유형을 설명하여 detection

### 3. 포지션의 맥락

Google Research의 biometric security 팀은 Google의 다양한 제품 (Android face unlock, Google Pay, Google Cloud Identity)에 기술을 제공. 학술 연구 + 제품 적용의 교차점에 위치.

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

관심 분야:
- Robotic navigation (실내외 자율 주행)
- Multi-modal foundation models (비전+언어+공간 추론)
- Reasoning & agency (LLM 기반 로봇 에이전시)
- Neural rendering (NeRF, 3DGS 등 장면 표현)
- Real-world evaluation (시뮬→실세계 전이)

### 3. FAR 팀의 위상

Pieter Abbeel은 로봇 학습 분야의 최고 권위자 중 한 명. Amazon이 $222M+ 규모의 acqui-hire를 했다는 것은 이 분야에 대한 Amazon의 강한 의지를 보여줌. Warehouse robotics라는 명확한 product path가 있으면서도 foundation model 수준의 기초 연구를 추구하는 독특한 포지션.

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

## 포지션 C 평가: Google Research — Face Anti-Spoofing / VLM 팀

### 적합도 점수: C+ (연결점이 제한적)

#### 강점
1. **OOD detection 경험:** 동환님의 OOD-robust fine-tuning 연구 (Samsung)가 face anti-spoofing의 domain generalization과 개념적으로 연결
2. **Vision encoder 경험:** Model Stock, DynOPool 등에서 vision model을 다룬 경험이 VLM 기반 biometric 연구에 간접 연관
3. **Publication track record:** CVPR/ECCV 논문 다수로 연구 역량 증명
4. **Generative model 경험:** RewardFlow의 생성 모델 경험이 deepfake detection/generation 맥락에서 간접 활용 가능

#### 약점
1. **🔴 Face anti-spoofing 경험 전무:** 이 분야는 매우 전문화되어 있으며, 동환님의 어떤 논문도 biometric security를 다루지 않음
2. **🔴 Domain generalization 직접 연구 없음:** OOD detection과 관련은 있지만, cross-domain face anti-spoofing에 필요한 meta-learning, disentangled representation 등의 경험이 없음
3. **🔴 연구 관심사 불일치:** 동환님의 연구 trajectory (generative modeling, video, model efficiency)와 face anti-spoofing은 방향이 매우 다름
4. **🟡 분야 전환 비용:** 인턴 3개월간 완전히 새로운 분야의 맥락을 파악하고 성과를 내기 어려움
5. **🟡 커리어 임팩트 불확실:** Face anti-spoofing 경험이 동환님의 PhD 연구 방향 (generative modeling, video understanding)에 어떤 기여를 할지 불명확

#### 가능 인턴 프로젝트 (가정)
- VLM을 활용한 zero-shot face anti-spoofing (VLM 지식 활용)
- Generative model 기반 공격 데이터 합성 (RewardFlow 경험 활용)
- OOD generalization 관점에서의 anti-spoofing (OOD 경험 활용)

#### 솔직한 평가
이 포지션은 동환님의 연구 trajectory와 **가장 거리가 먼** 선택지. Face anti-spoofing은 niche한 분야이고, 동환님의 핵심 강점 (generative modeling, video tokenization, model efficiency)이 거의 활용되지 않음. 인턴 경험이 PhD 연구에 기여하기도 어려움. **추천하지 않음** — 다른 세 포지션이 모두 더 나은 선택.

---

## 포지션 D 평가: Amazon FAR — Open-World Navigation 팀

### 적합도 점수: C (연결점 매우 제한적)

#### 강점
1. **Foundation model 시대 이해:** 대규모 모델 학습/활용 경험이 "robot foundation model" 패러다임을 이해하는 데 도움
2. **3D/4D vision 관심:** 동환님의 research interest에 3D/4D vision이 포함되어 있어, neural rendering과 간접 연결
3. **Strong publication record:** 연구 역량 자체는 충분히 증명
4. **팀의 명성:** Pieter Abbeel 팀에서의 경험은 커리어에 큰 자산

#### 약점
1. **🔴 Robotics 경험 전무:** Navigation, SLAM, motion planning, robot control 등 로봇 분야의 어떤 영역에서도 경험이 없음
2. **🔴 Navigation/Localization 연구 없음:** 이 포지션의 핵심인 visual navigation, place recognition, spatial reasoning 관련 논문이 전혀 없음
3. **🔴 연구 방향 불일치:** Chen Feng의 연구 (도시 내비게이션, 장면 이해, 멀티뷰 표현)와 동환님의 연구 (generative modeling, model efficiency)는 거의 겹치지 않음
4. **🟡 Embodied AI 경험 없음:** "Internet-scale data for navigation"이라는 테마에서 동환님이 기여할 수 있는 명확한 접점 부족
5. **🟡 분야 전환 비용 매우 큼:** Robotics + Navigation은 자체적인 기술 스택과 벤치마크를 가지고 있어 3개월 인턴으로 성과를 내기 어려움

#### 가능 인턴 프로젝트 (가정)
- Foundation model의 navigation fine-tuning 효율화 (Model Stock 관점)
- Neural rendering 기반 environment representation (3D vision 관심 활용)
- Video understanding for navigation (PyraTok의 시간 인코딩 활용)

#### 솔직한 평가
동환님의 연구 프로필과 **가장 큰 gap**이 있는 포지션. Robotics navigation은 완전히 다른 분야이며, 동환님의 핵심 강점이 거의 활용되지 않음. Pieter Abbeel 팀의 네트워크 가치를 제외하면, 이 인턴십에서 동환님의 PhD 연구에 직접적으로 도움이 되는 것을 배우기 어려움. **추천하지 않음** — 단, Pieter Abbeel과의 네트워킹이 장기적으로 중요하다면 고려 여지는 있음.

---

# PART 3: 종합 비교 — 어디에 지원해야 하는가?

## 4개 포지션 직접 비교표

| 평가 항목 | A: Apple MLR (NF) | B: FAIR/Meta (Video) | C: Google (Anti-Spoofing) | D: Amazon FAR (Navigation) |
|-----------|:-:|:-:|:-:|:-:|
| **Research fit** | B | **B+** | C+ | C |
| **Publication 가능성** | A | A | B+ | B |
| **기술 준비도** | B- | **B** | C | C- |
| **네트워크 접근성** | C | **B+** | B | B- |
| **채용 프로세스** | 불명확 | **유리** | 보통 | 보통 |
| **커리어 임팩트** | A | **A** | B | B+ |
| **인턴 문화** | B+ | **A** | B+ | A- |
| **PhD 연구 시너지** | B+ | **A-** | C | C |
| **종합 점수** | **B** | **A-** | **C+** | **C** |

## 최종 순위 및 권고

### 🏆 1순위: FAIR/Meta (Hu Xu) — 강력 추천

**이유:**
1. PyraTok의 비디오 경험이 직접적 연결점
2. "연구 우선 PhD"를 환영하는 명시적 채용 기준 — 동환님 프로필에 최적화
3. 기술적 gap이 가장 작음 (SSL 이해하면 됨)
4. UIUC ↔ Meta 학술 네트워크 활용 가능
5. Late-cycle posting = 경쟁이 덜할 수 있음
6. World model은 AI의 다음 패러다임 — PhD 연구에 직접 도움

### 📌 2순위: Apple MLR (Shuangfei Zhai) — 조건부 추천

**이유:**
1. NF가 generative AI의 새로운 frontier — 선점 효과
2. 팀의 연구 생산성이 매우 높아 publication 가능성 큼
3. 단, NF 이론 기초부터 준비해야 하므로 시간 투자 많이 필요
4. RewardFlow/PyraTok 경험을 NF에 연결하는 concrete idea가 필수

### ⚠️ 3순위: Google Research (Yaojie Liu) — 비추천

**이유:**
1. Face anti-spoofing은 동환님의 연구 trajectory와 거리가 먼 niche 분야
2. 인턴 경험이 PhD 연구 방향에 기여하기 어려움
3. 동환님의 핵심 강점 (generative modeling, video, efficiency)이 거의 활용 안 됨
4. 유일한 이점: Google Research라는 브랜드 + VLM 경험 확장

### ❌ 4순위: Amazon FAR (Yunsheng Tian / Chen Feng) — 비추천

**이유:**
1. Robotics navigation은 동환님과 가장 거리가 먼 분야
2. 3개월 인턴으로 robotics 맥락을 파악하고 성과를 내기 극도로 어려움
3. 채용 매니저(Chen Feng)의 연구 방향과 동환님의 연구가 거의 겹치지 않음
4. 유일한 이점: Pieter Abbeel 팀 네트워크 (장기적 가치)

---

# PART 4: 지원 전 구체적 액션 플랜

## A. 공통 준비사항 (즉시)

### [이번 주 안에]

1. **CV에 Technical Skills 섹션 추가**
   - `Python, C/C++, Java | PyTorch | CUDA (if applicable) | Docker, Git, Slurm, W&B | Multi-GPU training`

2. **Research Statement 다듬기**
   - 현재: "3D/4D vision and generative modeling" (너무 광범위)
   - 개선안: *"I study how geometric insights in weight space and latent space can make generative models more efficient and controllable — from model merging to reward-guided editing to video tokenization."*

3. **PyraTok에서의 본인 기여 정리** — 5저자이므로 구체적 기여를 2-3문장으로

4. **DM 초안 작성** — 두 분 모두 "DM으로 연락하라"고 했으므로 초안 준비

### [1-2주 안에]

5. **GitHub에 코드 정리** — RewardFlow, Model Stock 코드 공개 여부 확인

6. **Advisor와 상의** — Ismini Lourentzou 교수님에게 포지션 공유, Meta/Apple 네트워크 확인

---

## B. Apple MLR 전용 준비사항

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

## D. DM 발송 타이밍 전략 (업데이트)

```
3/11(화) ~ 3/14(금): MetaCLIP 정독 + NF 기초 학습 + 코드 정리
3/14(금): Advisor 상담
3/15(토) ~ 3/16(일): DM 초안 최종 수정
3/17(월): FAIR (Hu Xu) DM 발송 ← 1순위, late-cycle이므로 빨리
3/18(화) ~ 3/21(금): NF 집중 학습 (TarFlow 코드 실행)
3/22(월): Apple MLR (Shuangfei Zhai) DM 발송
```

> **Google Research, Amazon FAR에는 지원하지 않는 것을 권고.** Research fit이 너무 낮아 DM 작성 시간을 FAIR/Apple 준비에 투자하는 것이 더 효율적.

---

# PART 5: 리스크 분석

## 최악의 시나리오와 대비

| 시나리오 | 확률 | 대응 |
|---------|------|------|
| 두 곳 모두 이미 자리 채워짐 | 중간 | DM 자체가 2027 Summer 네트워킹. NF/video pretraining 학습은 연구에 도움 |
| Apple DM 무응답 | 높음 | Apple은 보수적. 2주 후 follow-up 1회. 그래도 안 되면 2027 준비 |
| FAIR 인터뷰 → NF 질문 나옴 | 낮음 | FAIR은 NF를 하지 않음. Video pretraining/SSL 위주 준비 |
| 둘 다 합격 | 낮음 | FAIR 선택 추천 (fit 더 좋고, world model은 장기적으로 더 큰 방향) |
| DM 후 1주 안에 인터뷰 잡힘 | 중간 | 이번 주부터 준비 시작해야 하는 이유 |
| Google/Amazon 도 같이 지원? | - | 권고하지 않음. 시간 대비 기대값이 낮음 |

## 현실 체크

- **시기적 한계:** 2026 Summer 인턴 대부분은 2025년 가을에 모집 마감. 두 트윗 모두 "아직 자리 있다"는 특수 상황.
- **경쟁 강도:** 트위터 공개 포스팅이므로 많은 PhD 학생이 DM을 보낼 것. 차별화가 핵심.
- **가장 큰 차별화:** 논문 수가 아니라 **"왜 내가 이 프로젝트에 적합한 사람인가"**에 대한 concrete idea.
- **4개 다 지원하면?** 시간 분산으로 상위 2개의 준비 질이 떨어짐. 집중이 더 효과적.

---

# PART 6: 종합 권고사항

## Top 3 즉시 실행 액션

1. **🔴 이번 주 안에 Advisor 상담** — 포지션 공유, 네트워크 확인, introduction 가능성 타진
2. **🔴 1주 안에 FAIR DM 발송** — MetaCLIP 논문 읽고, 비디오 데이터 큐레이션 concrete idea를 DM에 포함
3. **🟡 2주 안에 Apple DM 발송** — TarFlow 코드를 직접 돌려보고 NF 최소 이해 확보

## 지원하지 않을 포지션에 대한 권고

- **Google Research (Yaojie Liu):** Face anti-spoofing은 동환님의 연구와 너무 다름. 시간 투자 비추천.
- **Amazon FAR (Chen Feng):** Robotics navigation은 완전히 다른 분야. Pieter Abbeel 네트워킹이 목적이라면 다른 루트 (학회 등)가 더 효율적.

## 장기적 관점

두 포지션 모두에 떨어지더라도, 이 준비 과정에서 얻는 것:

- **Normalizing Flows 이해** → 2027 지원 시 NF 연구 팀 진입 가능
- **SSL/JEPA 이해** → Video understanding 연구의 기초 (본인 연구에 직접 도움)
- **MetaCLIP 방법론** → 데이터 큐레이션 관점은 어떤 ML 연구에서든 강력한 무기
- **네트워킹** → DM을 보낸 것 자체가 2027 Summer의 기반

---

*본 보고서는 공개된 논문, 트위터 포스팅, 개인 홈페이지, Google Scholar, GitHub 정보를 바탕으로 작성되었습니다. 실제 채용 결정은 다양한 요인에 의해 좌우되며, 본 분석은 준비 방향 제시를 목적으로 합니다.*

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
- Face Anti-Spoofing / Domain Generalization 관련 CVPR, ICCV 논문들

### Amazon FAR References
- [Yunsheng Tian Personal Website](https://www.yunshengtian.com/)
- [Yunsheng Tian Google Scholar](https://scholar.google.com/citations?user=sf6RjM4AAAAJ)
- [Fabrica — CoRL 2025 Outstanding Paper](https://github.com/yunshengtian/Fabrica)
- [Chen Feng Homepage](https://simbaforrest.github.io/)
- [Chen Feng Google Scholar](https://scholar.google.com/citations?user=YeG8ZM0AAAAJ)
- [AI4CE Lab](https://ai4ce.github.io/)
- [CityWalker — CVPR 2025](https://github.com/ai4ce/CityWalker)
- [Amazon/Covariant acqui-hire (TechCrunch)](https://techcrunch.com/2024/08/31/amazon-hires-the-founders-of-robotics-ai-startup-covariant/)

### Background References
- [LeCun's AMI Labs — MIT Technology Review](https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/)
- [World Models Race 2026 — Introl](https://introl.com/blog/world-models-race-agi-2026)
- [LeJEPA — Turing Post](https://www.turingpost.com/p/lejepa)
