# Dong-Hwan Jang — Internship Readiness Report

## 빅테크 인턴 채용 담당자 3인 합동 평가

> 평가일: 2026-03-08
> 대상: donghwanjang.github.io 홈페이지 + CV (2 pages)
> 평가자: Google Research, Meta FAIR, NVIDIA Research 인턴 채용 담당자 (시뮬레이션)

---

# PART 1: 3인 개별 평가

---

## Agent 1: Sarah Chen — Google Research, Research Intern Hiring Lead (3D Vision & Generative AI Team)

### 총평: B+ (Strong Candidate with Gaps)

**첫인상 (30초 스크리닝)**
홈페이지를 열었을 때 깔끔한 학술 페이지 구조가 눈에 들어옵니다. CVPR 2026 두 편, ECCV 2024 Oral — 퍼블리케이션 라인업만으로 1차 스크리닝은 통과입니다. 하지만 Google이 인턴에게 기대하는 몇 가지 핵심 요소가 보이지 않습니다.

**강점:**

1. **Publication trajectory가 인상적** — CVPR 2022 (1저자) → ECCV 2024 Oral (1저자) → CVPR 2026 (공저 2편). 꾸준한 상승 곡선.
2. **산업 경험 + 학계 균형** — Samsung, NAVER AI Lab 경험이 있어 실제 프로덕션 환경을 이해함. Google은 "연구를 실제로 배포할 수 있는 사람"을 좋아합니다.
3. **Model Stock (ECCV Oral)의 실용성** — Weight merging은 Google의 대규모 모델 운영과 직결되는 주제. "24x less cost" 같은 효율성 메트릭이 Google의 DNA와 맞음.
4. **장학금 이력** — 관정장학금 + 한국정부 해외장학금은 해당 분야에서 탑 인재라는 external validation.

**우려사항:**

1. **코딩 역량이 보이지 않음** — GitHub 링크가 Model Stock 하나뿐. Google Research 인턴이라도 코딩 인터뷰를 봐야 합니다. 오픈소스 contribution, 개인 프로젝트 코드가 전혀 보이지 않아 코딩 실력을 판단할 수가 없음.
2. **1저자 비율 하락 우려** — CVPR 2026 두 편 모두 1저자가 아님. Ph.D. 1년차라 자연스럽긴 하지만, "이 학생이 독립적으로 프로젝트를 리드할 수 있나?"라는 질문이 생김.
3. **Research Statement의 추상성** — "physics-grounded visual systems that achieve spatial and temporal consistency"는 너무 광범위함. 구체적으로 어떤 문제를 풀고 싶은지, 어떤 approach를 취하는지가 불명확.
4. **홈페이지에 Skills/Tools 섹션 부재** — PyTorch, JAX, CUDA, distributed training 등 기술 스택을 명시하지 않음. Google은 JAX/TPU 경험을 매우 중시함.

**채용 결정:** Phone screen 진행 → 코딩 능력과 research depth 확인 필요

---

## Agent 2: Marcus Rivera — Meta FAIR, PhD Intern Recruiting Manager (Generative AI Division)

### 총평: B+ (Promising but Needs Positioning)

**첫인상 (30초 스크리닝)**
Meta FAIR에서 우리가 찾는 건 "한 분야를 깊이 파고든 사람" 또는 "완전히 새로운 것을 만들어본 사람"입니다. Dong-Hwan의 프로필은 둘 다 약간씩 걸치면서 어느 쪽으로도 강력하지 않은 느낌입니다.

**강점:**

1. **Generative AI에서의 최신 work** — RewardFlow (reward-guided Langevin dynamics)는 Meta가 현재 무겁게 투자 중인 controllable generation과 정확히 맞음. 이 논문 하나로 대화를 시작할 수 있음.
2. **Weight space geometry에 대한 깊은 이해** — Model Stock과 Merge & Bound를 통해 fine-tuning dynamics, loss landscape, weight merging에 대한 비범한 이해도를 보여줌. LLaMA 같은 대형 모델의 fine-tuning 전략에 바로 적용 가능.
3. **Samsung에서의 production 배포 경험** — "deployed results to production systems"는 연구를 실제로 운영 가능한 수준까지 끌고 간 경험. FAIR이 원하는 "research that ships" 마인드셋.
4. **COVID-19 데이터셋의 impact** — Kaggle top-3 impact, NeurIPS workshop. Data curation과 real-world impact를 동시에 보여줌.

**우려사항:**

1. **Research narrative가 분산됨** — Pooling → weight merging → image editing → video tokenization. 연결 고리는 있지만, 홈페이지에서 이를 하나의 스토리로 엮지 못함. "나는 X를 풀기 위해 Y에서 시작해서 Z까지 왔다"는 narrative가 필요.
2. **Video/3D 경험 부재** — Research interest에 "3D/4D vision"과 "video generation"을 강조하지만, 실제 3D 관련 논문이 없음. PyraTok은 video이긴 하나 5저자. Meta는 video understanding/generation에 막대한 투자를 하고 있어 여기서의 직접적 contribution이 중요.
3. **대규모 모델 훈련 경험이 불분명** — LLaMA-scale 모델 경험이 있는지, multi-GPU/multi-node 트레이닝 경험이 있는지 CV에서 판단 불가.
4. **홈페이지 디자인이 2010년대 수준** — Jon Barron 템플릿은 academic community에선 acceptable하지만, 산업체 리크루터 입장에서는 outdated. Interactive demo, video, 코드 링크가 부족.

**채용 결정:** RewardFlow 팀 매니저와 추가 논의 후 결정. Research fit은 있으나 depth 확인 필요

---

## Agent 3: Dr. Priya Krishnamurthy — NVIDIA Research, Senior Recruiter (Visual Computing & Generative Models)

### 총평: A- (Strong Fit for NVIDIA's Direction)

**첫인상 (30초 스크리닝)**
NVIDIA 리서치 입장에서 이 프로필은 꽤 매력적입니다. Diffusion 모델 경험, 효율적 fine-tuning, hardware-aware thinking — 우리가 원하는 조합과 가깝습니다.

**강점:**

1. **Efficiency-aware research philosophy** — DynOPool (33% compression without accuracy loss), Model Stock (24x cost reduction). NVIDIA에서 우리는 "더 적은 GPU로 더 많은 것을"이라는 효율성에 집착합니다. 이 철학이 일관되게 보임.
2. **Diffusion model + controllable generation** — RewardFlow의 "training-free, zero-shot" 접근은 NVIDIA의 inference 최적화 방향과 맞음. Langevin dynamics 기반 제어는 이론적으로도 탄탄.
3. **산업 배포 경험** — Samsung에서의 반도체 제조 anomaly detection은 실제 하드웨어 레벨의 문제 해결 경험. NVIDIA는 하드웨어 회사이므로 이런 경험을 높이 평가.
4. **특허 보유** — US Patent Application (Motion Deblur) + Samsung 특허 (model merging). IP 창출 능력은 NVIDIA에서 매우 중시하는 역량.
5. **PyraTok의 "4K/8K resolution" 처리** — 고해상도 비디오 처리 경험은 NVIDIA의 GPU 기반 미디어 파이프라인과 직결.

**우려사항:**

1. **CUDA/GPU 프로그래밍 경험이 명시되지 않음** — NVIDIA 인턴에게 CUDA는 거의 필수. CV에 기술 스택이 전혀 없어 확인 불가.
2. **3D reconstruction/NeRF 경험 부재** — Research interest에 "3D/4D vision"을 언급하지만 3D-specific 논문이 없음. NVIDIA는 3D Gaussian Splatting, NeRF 등에 무겁게 투자 중.
3. **Open-source presence 부재** — GitHub activity, open-source 기여가 보이지 않음. NVIDIA Research는 오픈소스 커뮤니티 참여를 중시함.
4. **Advisor network** — Ismini Lourentzou 교수의 NVIDIA 연결고리가 불분명. 이전 advisor인 Bohyung Han (SNU), Dongyoon Han/Sangdoo Yun (NAVER)의 네트워크는 주로 한국 중심.

**채용 결정:** 인터뷰 진행 적극 추천. Efficiency + generative AI 조합이 NVIDIA의 현재 방향과 잘 맞음.

---

# PART 2: 3인 합동 토론 — 개선사항

## A. 홈페이지 개선사항 (Critical → Nice-to-have 순)

### [Critical] 1. Technical Skills 섹션 추가

- **현재:** 기술 스택 정보 없음
- **개선:** Languages (Python, C++, Java), Frameworks (PyTorch, JAX), Tools (CUDA, Docker, W&B), Infra (Multi-GPU, Slurm) 등을 명시적으로 나열
- **3인 합의:** 산업체 리크루터의 80%는 skills 키워드로 1차 필터링함. 이것이 없으면 시스템에서 걸러질 수 있음.

### [Critical] 2. GitHub / Code 링크 대폭 보강

- **현재:** Model Stock에만 GitHub 링크
- **개선:** 모든 논문에 코드 링크 추가. 없다면 reproduction code라도. 개인 GitHub 프로필 링크도 추가.
- **Sarah(Google):** "코드를 보여주지 않으면 코딩 인터뷰에서 5배 더 힘들어집니다."
- **Priya(NVIDIA):** "NVIDIA는 코드 품질을 직접 확인합니다. 링크가 없으면 기회를 놓칠 수 있어요."

### [Critical] 3. Research Narrative 재구성

- **현재:** "3D/4D vision and generative modeling" (너무 광범위)
- **개선:** 자신만의 명확한 thesis statement 필요.
  - 예시: *"I study how geometric priors in weight space and latent space can make generative models more efficient, controllable, and physically consistent — from model merging to reward-guided editing."*
- **Marcus(Meta):** "Research interest를 읽고 5초 안에 '이 사람이 뭘 하는 사람인지' 알 수 있어야 합니다."

### [High] 4. Teaching Experience 숨겨진 섹션 복원

- **현재:** HTML 주석으로 숨겨져 있음
- **개선:** 즉시 uncomment. 특히 "Samsung AI Expert Course", "Hyundai Motors AI Expert Course" TA는 산업체 교육 경험이므로 매우 가치 있음.

### [High] 5. Work Experience를 홈페이지에 추가

- **현재:** CV에만 존재, 홈페이지에 없음
- **개선:** Samsung AI Center + NAVER AI + Mind's Lab + TNC Technology를 timeline 형태로 추가
- **3인 합의:** 인턴 채용 시 가장 먼저 보는 건 "이전에 어디서 일했는가". 홈페이지에 이 정보가 없으면 CV를 다운로드해야 하는데, 많은 리크루터는 그 단계까지 가지 않음.

### [High] 6. 프로젝트별 Impact Metrics 추가

- **현재:** 논문 설명만 있음
- **개선:** GitHub stars, citations, downloads 등 정량적 지표 추가
  - 예: "Model Stock: ★ 200+ GitHub stars, 50+ citations"
  - 예: "DS4C Dataset: 10,000+ Kaggle downloads"

### [Medium] 7. Interactive Demo / Video 추가

- **현재:** 정적 이미지만 있음
- **개선:** RewardFlow의 image editing demo (Gradio/HuggingFace Spaces), PyraTok의 video reconstruction 예시
- **Marcus(Meta):** "2026년에 demo 없는 generative AI 연구는 incomplete합니다."

### [Medium] 8. Blog / Technical Writing 섹션

- 논문의 핵심 아이디어를 비전문가도 이해할 수 있게 풀어 쓴 블로그 포스트 1-2개.

### [Nice-to-have] 9. 웹사이트 현대화

- Jon Barron 템플릿은 academic community에선 acceptable하지만, 산업체 리크루터에게는 outdated.

---

## B. CV 개선사항

### [Critical] 1. Technical Skills 섹션 추가 (1페이지 상단, Research Interests 바로 아래)

- Programming: Python, C/C++, Java
- ML Frameworks: PyTorch, (JAX if applicable)
- Tools: CUDA, Docker, Git, Slurm, W&B
- Libraries: Hugging Face, Diffusers, OpenCV, NumPy

### [Critical] 2. Quantitative Impact 강화

- 현재: "substantially reducing false positives" (Samsung) → 개선: "reducing false positive rate by X%"
- 현재: "outperforming state-of-the-art" (Motion Deblur) → 개선: "achieving X dB PSNR improvement"

### [High] 3. "Software Engineer" 경력 활용법 개선

- 현재: "Developed a Java-based payment gateway server"
- 개선: "Designed and deployed a high-availability payment gateway handling X transactions/day for Y corporate clients"

### [High] 4. Reviewer / Service 경험 추가

- 학회 리뷰어 경험이 있다면 반드시 포함 (CVPR, ECCV, NeurIPS 등)

### [Medium] 5. Patent 정보를 별도 섹션으로 분리하여 가시성 향상

### [Medium] 6. 2페이지 포맷 최적화 — Skills 추가 후에도 2페이지 유지

---

# PART 3: 예상 인터뷰 질문 (28개)

## A. Research 질문 (모든 회사 공통)

### Model Stock 관련 (1저자 — 가장 깊이 물어볼 논문)

1. **"Model Stock에서 fine-tuned weights가 thin shell 위에 존재한다는 발견의 직관적 설명을 해주세요. 왜 이런 현상이 발생한다고 생각하나요?"**
   - Follow-up: "이 현상이 모든 아키텍처에서 나타나나요? Transformer vs CNN 차이가 있나요?"

2. **"Model Soup과 비교해서 Model Stock의 핵심 차별점은 뭔가요? 2개 모델로 center를 근사하는 것이 왜 가능한가요?"**
   - Follow-up: "3개, 4개 모델을 쓰면 어떻게 되나요? Diminishing returns가 있나요?"

3. **"Weight merging이 OOD robustness를 향상시키는 메커니즘을 loss landscape 관점에서 설명해주세요."**
   - Follow-up: "이 아이디어를 LLM fine-tuning에 적용한다면 어떤 challenge가 있을까요?"

4. **"Layer-wise angle과 norm이 거의 일정하다는 발견은 어떤 theoretical framework으로 설명할 수 있나요?"**

### RewardFlow 관련

5. **"Langevin dynamics를 diffusion model의 sampling에 어떻게 통합했나요? Gradient computation의 computational cost는 어떻게 관리하나요?"**

6. **"Reward function 설계 시 VQA-based reward와 SAM-guided reward를 hierarchical하게 결합한 이유는?"**
   - Follow-up: "Reward hacking 문제는 없었나요? 어떻게 방지했나요?"

7. **"Training-free, zero-shot이라는 건 큰 장점인데, 단점은 뭔가요? Inference time은 어떻게 되나요?"**

### PyraTok 관련

8. **"Binary codebook을 사용하는 이유는? Continuous latent 대비 장단점은?"**

9. **"4K/8K resolution scaling이 가능한 이유를 아키텍처적으로 설명해주세요."**

### DynOPool 관련

10. **"Differentiable pooling layer에서 scale factor를 어떻게 학습하나요? Discrete한 resolution 선택을 continuous optimization으로 어떻게 relaxation했나요?"**

---

## B. Technical / Coding 질문

### 알고리즘 & 자료구조 (Google 스타일)

11. **"주어진 N개의 3D point cloud에서 가장 가까운 K개의 점을 찾는 알고리즘을 설계하세요."** (KD-tree, Ball tree, FAISS 등)

12. **"Image의 connected components를 효율적으로 찾는 알고리즘을 구현하세요."** (BFS/DFS, Union-Find)

13. **"Distributed training에서 gradient synchronization을 구현하세요. All-reduce의 시간복잡도는?"**

### ML System Design (Meta/NVIDIA 스타일)

14. **"1000개의 fine-tuned 모델을 효율적으로 merge하는 시스템을 설계하세요."** (Model Stock을 scale-up한다면?)

15. **"실시간 video editing 파이프라인을 설계하세요. Latency 요구사항은 100ms입니다."** (RewardFlow를 production에 넣는다면?)

16. **"Wafer defect detection 시스템에서 false positive rate을 1% 이하로 낮추려면 어떻게 하시겠습니까?"** (Samsung 경험 기반)

---

## C. Behavioral / Situational 질문

17. **"가장 실패했던 연구 경험은? 거기서 뭘 배웠나요?"**

18. **"Samsung에서 연구 결과를 production에 배포할 때 가장 큰 challenge는 뭐였나요?"**

19. **"팀에서 의견 충돌이 있었을 때 어떻게 해결했나요?"**

20. **"왜 Ph.D.를 시작했나요? Samsung에서 안정적인 포지션이 있었는데?"**

21. **"인턴십에서 3개월 동안 구체적으로 무엇을 달성하고 싶나요?"**

22. **"이 회사(Google/Meta/NVIDIA)에서 일하고 싶은 이유가 뭔가요? 다른 회사가 아니라 왜 여기?"**

---

## D. 회사별 특화 질문

### Google 특화

23. **"JAX/TPU 경험이 있나요? PyTorch 코드를 JAX로 포팅해본 적 있나요?"**
24. **"Google의 어떤 product에 당신의 연구를 적용할 수 있나요?"** (Imagen, Veo, Gemini 등)

### Meta 특화

25. **"Open-source AI에 대한 당신의 생각은? LLaMA의 오픈소스 전략에 대해 어떻게 생각하나요?"**
26. **"Metaverse/AR에서 당신의 3D vision 연구가 어떻게 활용될 수 있나요?"**

### NVIDIA 특화

27. **"CUDA 커널을 직접 작성해본 경험이 있나요? GPU memory hierarchy를 설명해주세요."**
28. **"Model inference를 TensorRT로 최적화해본 경험은?"**

---

# PART 4: 2026 Summer Internship 지원 추천 리스트

## Tier 1: 최우선 지원 (Research Fit + 채용 가능성 높음)

| 회사 | 팀/포지션 | 매칭 이유 |
|------|-----------|-----------|
| **NVIDIA Research** | Visual Computing / Generative AI Intern | Efficiency + generative model 조합이 NVIDIA 방향과 정확히 맞음. 특허 경험도 플러스. |
| **Google DeepMind** | Research Intern (Generative Models) | Model efficiency, diffusion model 경험. Veo/Imagen 팀과 fit. |
| **Google Research** | Student Researcher (Perception/3D) | 3D vision research interest + model merging 경험. UIUC 위치 유리. |
| **Adobe Research** | Research Intern (GenAI/Creative AI) | RewardFlow의 image editing이 Adobe 핵심 비즈니스와 직결. |
| **Microsoft Research** | Research Intern (Vision & Multimedia) | Broad CV 연구 범위가 MSR의 다양한 팀과 매칭 가능. |

## Tier 2: 강력 추천 (약간의 Gap 있지만 도전 가치 높음)

| 회사 | 팀/포지션 | 매칭 이유 | Gap |
|------|-----------|-----------|-----|
| **Meta FAIR** | Research Intern (Video Gen) | RewardFlow + PyraTok. Make-A-Video, Emu 팀. | 1저자 video 논문 부재 |
| **Apple MLR** | AI/ML Research Intern | On-device efficiency. Model Stock의 경량화 철학과 맞음. | 보수적 채용 프로세스 |
| **Amazon AGI/Science** | Applied Scientist Intern | Model efficiency, production 배포 경험 | Pure research보다 applied |
| **Qualcomm AI Research** | Research Intern | On-device AI, model compression. DynOPool 관점. | Mobile/edge 특화 필요 |
| **Samsung Research America** | Research Intern | 이전 Samsung 경험 + 네트워크 | 다양성 관점에서 후순위 |

## Tier 3: 추천 (Niche Fit 또는 성장 기회)

| 회사 | 팀/포지션 | 매칭 이유 |
|------|-----------|-----------|
| **Stability AI** | Research Intern | Diffusion model 전문. RewardFlow 직접 연관 |
| **Runway** | Research Intern (Video AI) | Video generation. PyraTok 연관 |
| **ByteDance Research** | Research Intern (Visual Gen) | PixelDance, MagicAnimate 등 video gen 팀 |
| **Databricks** | Research Intern | 이전 초청 강연 인연. Model efficiency 관점. |
| **Salesforce Research** | Research Intern (BLIP team) | Vision-language, generative model 경험 |
| **Toyota Research Institute** | Research Intern (ML) | 3D/4D vision for autonomous driving |
| **Bosch AI** | Research Intern | Industrial AI + CV. Samsung 경험 활용 |

## Tier 4: 비빅테크 연구소 (학술 인턴/방문 연구)

| 기관 | 포지션 | 매칭 이유 |
|------|--------|-----------|
| **Allen AI (AI2)** | Predoctoral Young Investigator | 우수한 멘토링, publication 지원 |
| **Max Planck (Tubingen)** | Visiting Researcher | 3D vision 강세. Michael Black 그룹 |
| **MILA** | Visiting Researcher | Generative model 연구 강점 |

---

## 지원 전략 Timeline

```
2025년 9-10월:  NVIDIA, Google DeepMind, Adobe 조기 지원
2025년 10-12월: Meta FAIR, Microsoft Research, Apple 지원
2026년 1-2월:   Amazon, Qualcomm, 스타트업 지원
2026년 3월:     Late openings 확인 및 추가 지원
```

> **현실 체크:** 현재 시점(2026년 3월)에서는 대부분의 2026 Summer 모집이 마감됐을 가능성이 높습니다.
> Late openings/rolling basis 포지션에 집중하거나, **2027 Summer를 선제 준비**하는 것이 전략적입니다.

---

## 최종 3인 합의 — 핵심 액션 아이템

**Sarah(Google):** "코딩 실력 증명과 GitHub presence가 가장 시급합니다. 이것만 채우면 바로 competitive해집니다."

**Marcus(Meta):** "Research narrative를 하나로 엮으세요. 'Efficient and controllable generative models'라는 하나의 축으로 모든 연구를 연결할 수 있습니다."

**Priya(NVIDIA):** "Technical skills를 CV와 홈페이지에 즉시 추가하세요. 그리고 RewardFlow나 PyraTok의 interactive demo를 만드세요. 2026년에 demo 없는 GenAI 연구자는 절반의 무기로 싸우는 겁니다."

---

*본 보고서는 빅테크 인턴 채용 프로세스의 일반적 기준을 바탕으로 시뮬레이션한 것이며, 실제 채용 결과를 보장하지 않습니다.*
