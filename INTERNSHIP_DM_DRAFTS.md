# Internship DM/Email 초안 + CV Research Interest 커스터마이징 가이드

> 작성일: 2026-03-24
> 대상: Dong-Hwan Jang (UIUC CS PhD 1년차, Advisor: Ismini Lourentzou)

---

# 공통 참고사항

**동환님의 핵심 무기:**
- PyraTok (CVPR 2026) — language-aligned pyramidal video tokenizer, 4K/8K
- RewardFlow (CVPR 2026) — reward-guided image editing, Langevin dynamics
- Model Stock (ECCV 2024 Oral) — weight space geometry, 24x cost reduction, CLIP 기반 검증
- Advisor: Ismini Lourentzou (PLAN Lab — Perception and LANguage)
- 산업 경험: Samsung AI Center, NAVER AI Lab

**현재 CV Research Interest (추정):**
> "3D/4D vision and generative modeling"

---

# A. Apple MLR — Shuangfei Zhai에게 보낼 Twitter DM

## 공고 톤 분석

공고가 매우 짧고 캐주얼함. "Checkout the following papers... reach out in DM if these excite you." 논문을 읽었는지가 핵심 필터. DM이므로 간결해야 함.

## 초안

```
Hi Dr. Zhai, I'm a first-year CS PhD at UIUC (advisor: Ismini Lourentzou).
Your TarFlow line of work is really exciting — I've gone through all four
papers and I'm especially interested in how STARFlow-V extends the
invertible structure to video with flow-score matching.

My recent work has relevant overlap:

• RewardFlow (CVPR'26): reward-guided image editing via Langevin dynamics
  on diffusion models — I'm curious whether similar reward-based sampling
  could improve NF generation quality without retraining
• Model Stock (ECCV'24 Oral): weight space geometry for efficient
  fine-tuning (24x cost reduction on CLIP) — the geometric structure of
  flow-based latent spaces is a natural next question
• PyraTok (CVPR'26): pyramidal video tokenizer — connects to the
  tokenization choices in STARFlow-V's latent space design

I'd love to contribute to pushing NF further. Happy to send my CV if
you're interested.

Homepage: [link] | Scholar: [link]
```

### 왜 이렇게 썼는가

1. **논문을 읽었다는 증거** — STARFlow-V의 "flow-score matching"을 구체적으로 언급. 4편 다 읽었다고만 하면 빈말처럼 들림.
2. **각 논문마다 NF와의 구체적 연결** — "reward-based sampling for NF", "flow-based latent space geometry" 등. 단순 나열이 아니라 아이디어를 던짐.
3. **DM에 맞는 길이** — Twitter DM은 길면 안 읽힘. CV 첨부 대신 "Happy to send"로 대화를 열어둠.
4. **"if these excite you"에 대응** — 실제로 excited하다는 걸 구체적으로 보여줌.

---

## CV Research Interest 조언 (Apple용)

**현재:** "3D/4D vision and generative modeling"

**Apple 맞춤 버전:**
> My research explores efficient and controllable generative modeling — from geometric insights in weight space (Model Stock) to reward-guided generation (RewardFlow) to hierarchical video tokenization (PyraTok). I am particularly interested in likelihood-based generative frameworks and their theoretical advantages for multi-modal generation.

**포인트:** "likelihood-based generative frameworks"를 넣으면 NF와의 연결이 자연스러움. Apple은 NF의 exact likelihood 계산을 핵심 selling point로 삼고 있으므로.

---

# B. FAIR/Meta — Hu Xu에게 보낼 LinkedIn DM

## 공고 톤 분석

"연구 우선 PhD"를 명시적으로 환영. "ad-hoc/random trials on internship interviews"에 시간 못 쓴 학생을 겨냥. 공감적이고 연구 중심 톤. Late-cycle이라 빨리 움직여야 함. "DM me"로 끝나므로 LinkedIn DM.

## 초안

```
Hi Dr. Xu, I'm Dong-Hwan Jang, a first-year CS PhD at UIUC (advisor:
Ismini Lourentzou, PLAN Lab). Your post about the video pretraining
internship at FAIR caught my attention — both the research direction and
the "prioritizing research" message resonate with me.

I've been working on video representation and generative modeling:

• PyraTok (CVPR'26): language-aligned pyramidal tokenizer for 4K/8K video.
  We found that how you tokenize video matters as much as the model itself
  — which aligns with your data-centric philosophy from MetaCLIP.
• RewardFlow (CVPR'26): reward-guided image editing via Langevin dynamics
  — controllable generation without model retraining.
• Model Stock (ECCV'24 Oral): efficient fine-tuning through weight space
  geometry (24x cost reduction on CLIP) — could be interesting for
  adapting large pretrained video models.

I've read MetaCLIP and I think the metadata-driven curation idea has
a natural extension to video — temporal structure and motion provide
rich metadata signals that images simply don't have.

Would love to discuss how I might contribute to the video pretraining
effort.

Homepage: [link] | Scholar: [link]
```

### 왜 이렇게 썼는가

1. **"prioritizing research" 콜백** — 공고의 핵심 메시지를 에코하여 "나는 당신이 찾는 바로 그 타입"임을 암시.
2. **MetaCLIP에 대한 실제 의견 제시** — "temporal structure as metadata"라는 concrete idea를 던짐. 읽기만 한 게 아니라 생각했음을 보여줌.
3. **PyraTok을 data-centric 관점으로 프레이밍** — Hu Xu의 연구 철학("data > architecture")과 연결. "토큰화 방식이 모델만큼 중요하다"는 주장이 MetaCLIP의 핵심 논지와 일맥상통.
4. **LinkedIn DM 적정 길이** — Twitter보다는 길어도 되지만, 스크롤 없이 읽을 수 있는 분량.

---

## CV Research Interest 조언 (FAIR용)

**현재:** "3D/4D vision and generative modeling"

**FAIR 맞춤 버전:**
> My research investigates how data representation and model efficiency interact in vision-language learning — from video tokenization (PyraTok) to weight space geometry for efficient adaptation (Model Stock) to reward-guided generation (RewardFlow). I am interested in scalable video pretraining and data-centric approaches to multi-modal learning.

**포인트:** "data representation", "data-centric", "scalable video pretraining"이 Hu Xu의 언어. FAIR/Meta는 "scale"과 "data"를 가장 중시.

---

# C. Google Research — Yaojie Liu에게 보낼 LinkedIn 메시지 (또는 이메일)

## 공고 톤 분석

가장 formal한 톤. "highly motivated PhD candidates", "Student Researcher", 공식 지원 링크 병행. 3가지 연구 방향을 명확히 제시. 2명 모집, 연장 가능. SRP이므로 공식 채널 지원도 필수.

## 초안

```
Hi Dr. Liu, I'm Dong-Hwan Jang, a first-year CS PhD student at UIUC,
advised by Prof. Ismini Lourentzou (PLAN Lab — Perception and Language).

I saw your post about the Summer 2026 Student Researcher positions on
VLM/MLLM applications and wanted to reach out — my research background
aligns with the three directions you listed:

Fine-grained vision reasoning:
  PyraTok (CVPR'26) is a language-aligned pyramidal video tokenizer that
  preserves fine-grained visual detail across spatiotemporal scales. The
  multi-scale representation is designed to retain precisely the kind of
  subtle visual information that current VLMs tend to miss.

Vision skills development:
  RewardFlow (CVPR'26) uses reward-guided Langevin dynamics for
  controllable image editing — the SFT→RL pipeline you mention for
  teaching new vision skills connects directly to this reward-based
  approach.

MLLM capability auditing:
  Model Stock (ECCV'24 Oral) analyzes weight space geometry for efficient
  VLM adaptation, validated on CLIP with 24x cost reduction. Understanding
  how fine-tuning affects model capabilities is a step toward systematic
  capability profiling.

My advisor's PLAN Lab works on vision-language models with limited
supervision (recent work includes multi-image VLM reasoning), so VLM
research is central to my PhD trajectory. I've also applied through the
official SRP link.

Would be happy to discuss further.

Homepage: [link] | Scholar: [link]
```

### 왜 이렇게 썼는가

1. **공고의 3가지 방향에 1:1 매핑** — 가장 formal한 공고이므로, 구조적으로 대응. "당신이 원하는 것 = 내가 하는 것"을 명확히.
2. **Lourentzou의 PLAN Lab을 강조** — "Perception and Language"라는 풀네임이 VLM 연구 환경에서 훈련받고 있음을 직접 보여줌. 다른 포지션에 없는 핵심 차별화.
3. **SRP 공식 지원 언급** — 공고가 공식 링크를 제공했으므로, 양쪽 채널 모두 활용하고 있음을 보여줌.
4. **각 논문의 VLM 연결을 구체적으로** — PyraTok은 "subtle visual information VLMs miss"로, RewardFlow는 "SFT→RL pipeline"으로, Model Stock은 "capability profiling"으로 각각 연결.

---

## CV Research Interest 조언 (Google용)

**현재:** "3D/4D vision and generative modeling"

**Google 맞춤 버전:**
> My research focuses on building efficient and capable vision-language models — from multi-scale visual tokenization (PyraTok) to reward-guided generation (RewardFlow) to understanding weight space geometry for VLM adaptation (Model Stock, validated on CLIP). I am particularly interested in improving fine-grained visual reasoning in multimodal LLMs and systematic evaluation of their capabilities.

**포인트:** "vision-language models"가 첫 키워드. "fine-grained visual reasoning"과 "systematic evaluation"이 공고의 3가지 방향 중 2가지를 직접 반영. 이 버전이 4개 중 **가장 동환님의 실제 연구 방향과도 잘 맞을 것**.

---

# D. Amazon FAR — Yunsheng Tian / Chen Feng에게 보낼 이메일

## 공고 톤 분석

가장 formal. 이메일 지원 (DM 아님). 제목 형식까지 지정: "[FAR Intern - Navigation] Full name + School". CV 첨부, availability 명시 요구. 5가지 관심 분야가 나열되어 있고, 그중 "multi-modal foundation models"이 동환님과 가장 연결됨.

## 초안

```
Subject: [FAR Intern - Navigation] Dong-Hwan Jang, UIUC

Dear Dr. Tian and Prof. Feng,

I am a first-year CS PhD student at UIUC, advised by Prof. Ismini
Lourentzou (PLAN Lab). I am writing about the Summer 2026 research
intern position on open-world navigation at Amazon FAR.

While my primary background is in vision-language models rather than
robotics, I believe the multi-modal foundation model angle of your work
connects to my research:

• PyraTok (CVPR'26): a language-aligned pyramidal video tokenizer that
  captures multi-scale spatiotemporal features. The hierarchical
  representation could benefit egocentric video understanding for
  navigation — encoding near/far spatial information at different
  resolutions.

• Model Stock (ECCV'24 Oral): efficient VLM adaptation through weight
  space geometry (24x cost reduction on CLIP). Deploying large foundation
  models on compute-constrained robot platforms is a natural application.

• RewardFlow (CVPR'26): reward-guided image editing via Langevin
  dynamics. The reward-based optimization framework connects to
  language-guided reward design for navigation policies (cf. ReWiND).

I am particularly interested in how efficient video representation and
foundation model adaptation techniques can improve navigation agents in
the open-world setting.

Maximum availability: [Summer 2026 dates — 채우기]

Homepage: [link]
CV: [attached]

Best regards,
Dong-Hwan Jang
```

### 왜 이렇게 썼는가

1. **솔직한 포지셔닝** — "my primary background is in VLM rather than robotics"를 먼저 인정. 숨기면 오히려 불리. 솔직함 + "but here's how it connects"가 더 설득력 있음.
2. **5가지 관심 분야 중 "multi-modal foundation models"에 집중** — Robotics나 neural rendering 경험이 없으므로, 동환님이 가장 강한 앵글로만 공략.
3. **공고 형식 준수** — 제목, CV 첨부, availability 모두 공고 지시 그대로. 이건 기본이지만 지키는 사람이 의외로 적음.
4. **ReWiND 레퍼런스** — 그들의 분야 논문을 알고 있다는 시그널. "이 사람이 우리 분야를 조사했구나."
5. **이메일 톤** — DM보다 formal. "Dear", "Best regards" 사용.

---

## CV Research Interest 조언 (Amazon FAR용)

**현재:** "3D/4D vision and generative modeling"

**Amazon FAR 맞춤 버전:**
> My research develops efficient vision-language model components — multi-scale video tokenization (PyraTok), reward-guided generation (RewardFlow), and geometric approaches to model adaptation (Model Stock). I am interested in applying foundation model techniques to embodied AI, particularly efficient visual representation and reward-based learning for real-world agents.

**포인트:** "embodied AI", "real-world agents"를 넣되 과장하지 않음. "applying foundation model techniques to"로 전이 의도를 명확히.

---

# 종합: CV Research Interest 전략

## 옵션 1: 범용 버전 (1개만 쓸 경우)

> My research focuses on efficient and controllable vision-language models — from weight space geometry for model adaptation (Model Stock) to reward-guided generation (RewardFlow) to multi-scale video tokenization (PyraTok). I am interested in how these techniques can improve multimodal understanding, generation, and reasoning.

**장점:** Google, FAIR, Apple 모두에 통하는 중립적 버전.
**단점:** 어디에도 완벽하지 않음.

## 옵션 2: 포지션별 맞춤 (추천)

CV를 4벌 준비할 필요는 없지만, Research Interest 한 문장만 바꿔도 인상이 크게 달라짐:

| 포지션 | 핵심 키워드 삽입 |
|--------|-----------------|
| Apple MLR | "likelihood-based generative frameworks", "theoretical advantages" |
| FAIR/Meta | "scalable video pretraining", "data-centric approaches" |
| Google Research | "fine-grained visual reasoning in multimodal LLMs", "systematic evaluation" |
| Amazon FAR | "foundation model techniques for embodied AI", "real-world agents" |

## 공통으로 반드시 빼야 할 것

~~"3D/4D vision"~~ — 4개 포지션 모두 3D가 핵심이 아님. 오히려 "이 사람은 다른 걸 하고 싶은 거 아닌가?"라는 인상을 줄 수 있음. Amazon FAR만 약간 연관 있지만, 그마저도 foundation model 앵글이 더 중요.

## 공통으로 반드시 넣어야 할 것

**"vision-language models"** — 4개 포지션 중 3개 (Google, FAIR, Amazon)가 VLM 관련. Apple도 TarFlowLM에서 language modeling을 다루고 있으므로 넓게 연결됨. 이게 동환님의 현재 연구(PyraTok, Model Stock on CLIP, advisor의 PLAN Lab)와도 가장 자연스러움.
