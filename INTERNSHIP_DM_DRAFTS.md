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

Homepage: [link] | Scholar: [link]
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

Homepage: [link] | Scholar: [link]
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
VLM/MLLM applications. I'm most excited about the vision skills
development direction — particularly the SFT→RL pipeline for teaching
VLMs new visual capabilities.

In RewardFlow (CVPR'26), I designed composable differentiable reward
functions that decompose complex visual quality into measurable
sub-objectives: a VQA-based reward for semantic accuracy, a SAM-guided
reward for spatial precision, and perceptual/CLIP alignment signals. The
optimization mechanism differs from RL policy training (RewardFlow steers
sampling at inference time via Langevin dynamics), but the core challenge
— defining what "good visual output" means as a learnable, differentiable
signal — is shared with the RL reward design bottleneck in vision skills
development. I'd be eager to bring this reward engineering experience to
the SFT→RL setting.

I also bring relevant VLM experience: Model Stock (ECCV'24 Oral)
validated efficient fine-tuning through weight space geometry on CLIP
(24x cost reduction), and PyraTok (CVPR'26) gave me hands-on experience
with multi-scale visual representation design — understanding what visual
information gets preserved or lost during tokenization.

My advisor's PLAN Lab works on vision-language models with limited
supervision (recent work includes multi-image VLM reasoning), so VLM
research is central to my PhD trajectory. I've also applied through the
official SRP link.

Would be happy to discuss further.

Homepage: [link] | Scholar: [link]
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

My primary background is in vision-language models rather than robotics,
but I believe I can bring a foundation model perspective that complements
your team's embodied AI expertise — particularly around efficient
adaptation and video representation.

• Model Stock (ECCV'24 Oral): I studied the geometric structure of
  fine-tuned weight spaces and showed that only 2 checkpoints are needed
  to approximate the optimal weight average (24x cost reduction on CLIP).
  For a team adapting large pretrained VLMs to new navigation domains with
  limited robot data, this kind of efficient adaptation could reduce the
  number of fine-tuning runs needed.

• PyraTok (CVPR'26): a pyramidal video tokenizer that captures multi-scale
  spatiotemporal features. Video tokenization is an active bottleneck in
  VLA architectures (cf. FAST, VQ-VLA), and our multi-scale approach
  could inform how egocentric video is efficiently encoded for action
  models.

I have read CityWalker and ReWiND — the idea of learning navigation from
Internet-scale video and using language-guided reward signals for policy
training is compelling. I am curious how foundation model adaptation and
video representation techniques from the VLM side could contribute to
this pipeline.

Maximum availability: [Summer 2026 dates — 채우기]

Homepage: [link]
CV: [attached]

Best regards,
Dong-Hwan Jang
```

### 왜 이렇게 썼는가

1. **솔직한 포지셔닝 유지** — "primary background is VLM not robotics"를 인정하되, "foundation model perspective that complements your embodied AI expertise"로 가치를 제시.
2. **연결 수를 3→2로 축소, 각각 더 정직하게** — RewardFlow→navigation rewards 연결은 surface-level analogy였으므로 삭제. 남은 2개에 집중.
3. **Model Stock의 training/inference 혼동 수정** — "compute-constrained robot deployment" 대신 "limited robot data로 VLM을 새 도메인에 적응"이라는 정확한 use case로 전환.
4. **PyraTok의 "near/far" 해석 삭제** — 논문에 없는 spatial-depth 개념 대신, VLA video tokenization bottleneck이라는 실제 분야 문제와 연결.
5. **CityWalker + ReWiND 레퍼런스** — 팀의 논문을 읽었다는 시그널. 하지만 "connects to my work"가 아니라 "I'm curious how my skills could contribute"로 겸손하게.
6. **공고 형식 준수** — 제목, CV 첨부, availability 모두 공고 지시 그대로.

---

## CV Research Interest 조언 (Amazon FAR용)

**현재:** "3D/4D vision and generative modeling"

**Amazon FAR 맞춤 버전:**
> My research develops efficient vision-language model components — multi-scale video tokenization (PyraTok) and geometric approaches to efficient model adaptation with limited data (Model Stock, validated on CLIP). I am interested in how these VLM techniques transfer to embodied settings, particularly efficient visual representation for action models and adapting foundation models to new domains with scarce robot data.

**포인트:** "embodied AI"를 넣되 과장하지 않음. "transfer to embodied settings"로 VLM→robotics 전이 의도를 솔직히. "scarce robot data"가 FAR 팀의 실제 pain point. RewardFlow는 이 맥락에서 억지이므로 제외.

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
| Amazon FAR | "efficient VLM adaptation with limited data", "transfer to embodied settings" |

## 공통으로 반드시 빼야 할 것

~~"3D/4D vision"~~ — 4개 포지션 모두 3D가 핵심이 아님. 오히려 "이 사람은 다른 걸 하고 싶은 거 아닌가?"라는 인상을 줄 수 있음. Amazon FAR만 약간 연관 있지만, 그마저도 foundation model 앵글이 더 중요.

## 공통으로 반드시 넣어야 할 것

**"vision-language models"** — 4개 포지션 중 3개 (Google, FAIR, Amazon)가 VLM 관련. Apple도 TarFlowLM에서 language modeling을 다루고 있으므로 넓게 연결됨. 이게 동환님의 현재 연구(PyraTok, Model Stock on CLIP, advisor의 PLAN Lab)와도 가장 자연스러움.
