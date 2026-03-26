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

My recent work connects in a few ways:

• RewardFlow (CVPR'26): I steer pretrained flow-matching models (Flux,
  Qwen) at inference time via reward-guided Langevin dynamics. I'm curious
  whether TarFlow's noise augmentation or STARFlow-V's flow-score matching
  formulation could provide analogous injection points for reward-based
  guidance in NFs — I see this as an open research question, not a solved
  one, and would love to explore it.
• PyraTok (CVPR'26): pyramidal video tokenizer for 4K/8K. I know
  STARFlow-V needs continuous latent spaces rather than discrete VQ tokens,
  so the tokenizer itself doesn't port over — but the design principles
  around temporal hierarchy and spatial scalability would inform how I think
  about latent space design for video NFs.
• Model Stock (ECCV'24 Oral): analyzing geometric structure (thin shells,
  angular concentration) in high-dimensional weight space for efficient
  fine-tuning (24x cost reduction on CLIP). I'd bring that same geometric
  analysis toolkit to understanding how NFs structure their learned
  transformations.

I'd love to contribute to pushing NF further. Happy to send my CV if
you're interested.

Homepage: https://donghwanjang.github.io | Scholar: https://scholar.google.com/citations?user=5MLvB1YAAAAJ&hl=en
```

### 왜 이렇게 썼는가

1. **논문을 읽었다는 증거** — STARFlow-V의 "flow-score matching"과 noise augmentation을 구체적으로 언급. TarFlow 시리즈의 기술적 특징을 이해하고 있음을 보여줌.
2. **RewardFlow를 리드로** — flow-matching backbone 위에서 reward-guided sampling을 실제로 구현한 경험이 NF와 가장 직접적 접점. "open question"으로 프레이밍하여 과장을 피함.
3. **PyraTok의 한계를 솔직하게 인정** — discrete VQ vs continuous latent의 차이를 스스로 짚음으로써 NF를 이해하고 있다는 시그널. 전이되는 건 "설계 원칙"임을 명확히.
4. **Model Stock은 transferable skill로** — latent space geometry와의 거짓 연결 대신, "고차원 기하학적 분석 능력"이라는 정직한 프레이밍.
5. **DM에 맞는 길이** — Twitter DM은 길면 안 읽힘. CV 첨부 대신 "Happy to send"로 대화를 열어둠.
6. **"if these excite you"에 대응** — 실제로 excited하다는 걸 구체적으로 보여줌.

---

## CV Research Interest 조언 (Apple용)

**현재:** "3D/4D vision and generative modeling"

**Apple 맞춤 버전:**
> My research focuses on controllable and efficient generative modeling — from reward-guided inference-time control of flow-matching models (RewardFlow) to geometric analysis of high-dimensional parameter spaces for efficient adaptation (Model Stock) to multi-scale video representation (PyraTok). I am particularly interested in likelihood-based generative frameworks, where exact density estimation opens doors to principled reward-based steering and theoretical guarantees that approximate methods lack.

**포인트:** "likelihood-based generative frameworks"를 넣으면 NF와의 연결이 자연스러움. "reward-based steering"이 RewardFlow→NF의 구체적 연구 방향을 암시. "flow-matching models"를 명시하여 TarFlow 계열과의 기술적 접점을 보여줌.

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

I've been thinking about MetaCLIP's metadata-driven curation and how it
could extend to video. Images have metadata like alt-text and co-occurring
queries, but video introduces richer dimensions — temporal coherence,
motion complexity, scene transitions, shot boundaries — that could enable
more structured curation at scale. I'd be excited to explore what a
"MetaCLIP for video" pipeline looks like, especially as video pretraining
data grows to Internet scale.

My recent work is relevant here:

• PyraTok (CVPR'26): a pyramidal video tokenizer that captures multi-scale
  spatiotemporal features. The multi-scale representations could serve as
  metadata features for video curation — measuring visual complexity and
  temporal structure at different granularities.
• Model Stock (ECCV'24 Oral): weight space geometry for efficient
  fine-tuning (24x cost reduction on CLIP). I'm curious whether similar
  geometric structure exists in video foundation models, and whether this
  could reduce the cost of adapting pretrained video representations to
  downstream tasks.

Would love to discuss how I might contribute to the video pretraining
effort.

Homepage: https://donghwanjang.github.io | Scholar: https://scholar.google.com/citations?user=5MLvB1YAAAAJ&hl=en
```

### 왜 이렇게 썼는가

1. **MetaCLIP → video 확장 아이디어를 중심축으로** — Hu Xu의 대표 연구에 대한 구체적 확장 아이디어를 제시. "temporal coherence, motion complexity, scene transitions" 등 video-specific metadata를 열거하여 단순 "비디오에 적용 가능" 이상의 사고를 보여줌.
2. **"prioritizing research" 콜백** — 공고의 핵심 메시지를 에코.
3. **PyraTok을 metadata feature provider로 재연결** — "data-centric 철학 공유"라는 억지 대신, multi-scale representation이 curation의 feature로 쓰일 수 있다는 구체적 역할 제시.
4. **Model Stock은 구체적 질문으로** — "could be interesting" 대신 "geometric structure가 video FM에도 존재하는가?"라는 testable question으로 전환.
5. **RewardFlow는 삭제** — Pretraining 팀에게 inference-time image editing은 약한 카드. 무리하게 넣기보다 강한 2개에 집중.
6. **LinkedIn DM 적정 길이** — 스크롤 없이 읽을 수 있는 분량 유지.

---

## CV Research Interest 조언 (FAIR용)

**현재:** "3D/4D vision and generative modeling"

**FAIR 맞춤 버전:**
> My research investigates how upstream representation choices affect vision-language learning at scale — from multi-scale video tokenization (PyraTok) to geometric analysis of fine-tuned weight spaces for efficient adaptation (Model Stock). I am interested in data-centric approaches to video pretraining: how curation strategy, tokenization design, and training recipes interact to determine what large video models actually learn.

**포인트:** "data-centric", "curation strategy", "video pretraining"이 Hu Xu의 언어. "upstream representation choices"로 tokenization과 curation을 자연스럽게 아우름. RewardFlow를 빼고 강한 2개에 집중.

---

# C. Google Research — Yaojie Liu에게 보낼 LinkedIn 메시지 (또는 이메일)

## 공고 톤 분석

가장 formal한 톤. "highly motivated PhD candidates", "Student Researcher", 공식 지원 링크 병행. 3가지 연구 방향을 명확히 제시. 2명 모집, 연장 가능. SRP이므로 공식 채널 지원도 필수.

## 초안

```
Hi Dr. Liu, I'm Dong-Hwan Jang, a first-year CS PhD student at UIUC,
advised by Prof. Ismini Lourentzou (PLAN Lab — Perception and Language).

I saw your post about the Summer 2026 Student Researcher positions on
VLM/MLLM applications and wanted to reach out. Among the three
directions you listed, I'm most drawn to vision skills development.

In RewardFlow (CVPR'26), I designed composable differentiable reward
functions that decompose visual quality into measurable sub-objectives:
a VQA-based reward for semantic accuracy, a SAM-guided reward for
spatial precision, and perceptual/CLIP alignment signals. RewardFlow
itself is an inference-time method (steering sampling via Langevin
dynamics, no model training), but the experience of defining what
"good visual output" means as a differentiable signal feels directly
relevant to designing reward functions for teaching VLMs new skills.

I also bring VLM-adjacent experience: Model Stock (ECCV'24 Oral) studied
weight space geometry for efficient fine-tuning on CLIP (24x cost
reduction), and PyraTok (CVPR'26) gave me hands-on experience with
multi-scale visual representation — how tokenization choices affect what
visual information a model can access.

My advisor's PLAN Lab focuses on vision-language research, so VLM is
central to my PhD trajectory. I've also applied through the official
SRP link.

Would be happy to discuss further.

Homepage: https://donghwanjang.github.io | Scholar: https://scholar.google.com/citations?user=5MLvB1YAAAAJ&hl=en
```

### 왜 이렇게 썼는가

1. **1개 방향에 집중** — 3가지 모두에 억지로 매핑하기보다, 가장 강한 연결인 "Vision skills development"에 집중. 나머지는 supporting background로.
2. **RewardFlow의 전이 가능 skill을 정직하게** — "optimization mechanism은 다르다"고 인정하면서, "differentiable reward 설계"라는 핵심 기술의 전이를 구체적으로 설명. VQA, SAM, CLIP 등 실제 reward 구성요소를 열거하여 깊이를 보여줌.
3. **Model Stock과 PyraTok은 "relevant VLM experience"로** — capability auditing과의 억지 연결 대신, CLIP 기반 실전 경험과 visual representation 설계 경험이라는 사실만 전달.
4. **Lourentzou의 PLAN Lab을 강조** — VLM 연구 환경에서 훈련받고 있음을 직접 보여줌.
5. **SRP 공식 지원 언급** — 양쪽 채널 모두 활용하고 있음을 보여줌.

---

## CV Research Interest 조언 (Google용)

**현재:** "3D/4D vision and generative modeling"

**Google 맞춤 버전:**
> My research focuses on vision-language model components and alignment — from designing composable differentiable rewards for visual quality (RewardFlow) to efficient VLM adaptation validated on CLIP (Model Stock) to multi-scale visual representation (PyraTok). I am particularly interested in teaching VLMs new visual capabilities through reward-based learning, and in understanding what visual information current tokenization pipelines lose.

**포인트:** "teaching VLMs new visual capabilities through reward-based learning"이 Vision skills development + SFT→RL 방향과 직접 연결. "composable differentiable rewards"로 RewardFlow의 구체적 기여를 어필. "what visual information tokenization pipelines lose"로 fine-grained reasoning과 자연스럽게 연결.

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

I am actively steering my PhD toward the intersection of 3D spatial
understanding and embodied reasoning. My current view is that robust
navigation will require VLAs for behavior planning and world action models (video generation-
based) for motion planning — and that both need a grounded
understanding of 3D space that is still largely missing from current
approaches. I am preparing a NeurIPS submission on maintaining 3D
consistency in video generation, which sits at this intersection.

This is why your posting on open-world navigation excites me: OOD task
execution in open environments is exactly where 3D reasoning + planning
becomes essential, not optional. I would love to explore how 3D spatial
understanding can be integrated into the foundation model stack for
navigation — bridging the gap between visual world models and physical
reality.

My published work, while not directly in robotics, builds relevant
foundations:

• RewardFlow (CVPR'26): reward-guided generation via Langevin dynamics
  on flow-matching models — experience designing differentiable reward
  functions and steering generative processes toward desired outcomes.
• Model Stock (ECCV'24 Oral): weight space geometry for efficient
  fine-tuning (24x cost reduction compared to previous method on CLIP)
  — adapting large pretrained models with minimal training costs.
• PyraTok (CVPR'26): multi-scale video tokenization for 4K/8K — how to
  efficiently represent spatiotemporal information at scale.

I have read CityWalker and ReWiND — the combination of Internet-scale
video for training and language-guided reward for policy learning aligns
with the direction I want to pursue.

Maximum availability: [Summer 2026 dates — 채우기]

Homepage: https://donghwanjang.github.io
CV: [attached]

Best regards,
Dong-Hwan Jang
```

### 왜 이렇게 썼는가

1. **PhD thesis 방향으로 포지셔닝** — "VLM 사람이 robotics에 연결점을 찾는다"가 아니라, "PhD 방향 자체가 3D spatial understanding + embodied reasoning이고, 이 인턴이 그 궤적 위에 있다"로 전환.
2. **연구 비전을 먼저 제시** — VLA(behavior planning) + world model(motion planning) + 3D understanding이라는 구체적 프레임워크를 보여줌. 단순 "관심 있다"가 아니라 "어떤 구조로 문제를 보는지"를 보여줌.
3. **NeurIPS 준비 중인 연구 언급** — 3D consistency in video generation. "이미 이 방향으로 움직이고 있다"는 증거.
4. **논문들은 "relevant foundations"으로 솔직하게** — "directly in robotics가 아니다"를 인정하되, 각 논문이 기여하는 기반 역량을 간결하게.
5. **open-world navigation의 핵심 과제와 연결** — OOD task execution에서 3D reasoning이 왜 essential한지를 짚음.
6. **CityWalker + ReWiND 유지** — 팀 논문을 읽었다는 시그널 + 자신의 방향과 align된다는 구체적 이유.

---

## CV Research Interest 조언 (Amazon FAR용)

**현재:** "3D/4D vision and generative modeling"

**Amazon FAR 맞춤 버전:**
> My research aims to bridge 3D spatial understanding and embodied reasoning through generative modeling. I work on reward-guided generation (RewardFlow), efficient model adaptation (Model Stock), and multi-scale video representation (PyraTok), and am currently extending this to 3D-consistent video generation. I am interested in how grounded 3D reasoning can improve navigation and planning in open-world environments — combining VLAs for behavior planning with world action models (video generation-based) for motion planning.

**포인트:** "3D spatial understanding + embodied reasoning"이 thesis 방향과 일치. "3D-consistent video generation"으로 NeurIPS 진행 중인 연구를 암시. "open-world environments"가 공고의 핵심 키워드.

---

# 종합: CV Research Interest 전략

## 옵션 1: 범용 버전 (1개만 쓸 경우)

> My research focuses on vision-language model components and controllable generation — from designing differentiable reward functions for visual quality (RewardFlow) to geometric analysis of weight spaces for efficient VLM adaptation (Model Stock) to multi-scale video tokenization (PyraTok). I am interested in how these techniques can improve multimodal understanding, generation, and reasoning.

**장점:** Google, FAIR, Apple 모두에 통하는 중립적 버전. "differentiable reward functions"가 구체적 기여를 보여줌.
**단점:** 어디에도 완벽하지 않음.

## 옵션 2: 포지션별 맞춤 (추천)

CV를 4벌 준비할 필요는 없지만, Research Interest 한 문장만 바꿔도 인상이 크게 달라짐:

| 포지션 | 핵심 키워드 삽입 |
|--------|-----------------|
| Apple MLR | "reward-based steering of flow-matching models", "likelihood-based generative frameworks" |
| FAIR/Meta | "data-centric approaches to video pretraining", "curation strategy" |
| Google Research | "teaching VLMs new visual capabilities through reward-based learning" |
| Amazon FAR | "3D spatial understanding + embodied reasoning", "VLA + world model for navigation" |

## 공통으로 반드시 빼야 할 것

~~"3D/4D vision"~~ — 4개 포지션 모두 3D가 핵심이 아님. 오히려 "이 사람은 다른 걸 하고 싶은 거 아닌가?"라는 인상을 줄 수 있음. Amazon FAR만 약간 연관 있지만, 그마저도 foundation model 앵글이 더 중요.

## 공통으로 반드시 넣어야 할 것

**"vision-language models"** — 4개 포지션 중 3개 (Google, FAIR, Amazon)가 VLM 관련. Apple도 TarFlowLM에서 language modeling을 다루고 있으므로 넓게 연결됨. 이게 동환님의 현재 연구(PyraTok, Model Stock on CLIP, advisor의 PLAN Lab)와도 가장 자연스러움.
