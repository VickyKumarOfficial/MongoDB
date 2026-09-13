# Vidya Evaluation and Integration for Niera

## 1. Executive Summary and Decision Context

### 1.1 Purpose

Vidya was evaluated as a potential educational reasoning and tutoring model for Niera, particularly for the current JEE/NEET-focused learning experience and for the future multimodal learning system.

The objective is not to use Vidya as an image, animation, 3D, or simulation generator. Rather, the objective is to determine whether a specialized educational language model can:

- Understand student questions and academic concepts
- Solve JEE/NEET-level problems
- Explain concepts pedagogically
- Identify and correct misconceptions
- Adapt explanations to a student's level
- Produce structured educational intent
- Determine what should be visualized
- Act as an upstream intelligence layer for Niera's 2D, 3D, and simulation systems

### 1.2 Current Finding

The experiments indicate that Vidya is a strong candidate for Niera's educational reasoning layer, particularly for:

- NCERT-oriented explanations
- JEE/NEET-style academic problems
- Step-by-step reasoning
- Misconception correction
- Student-level adaptation
- Structured educational responses
- Visual-learning intent generation

However, Vidya should not be treated as the final authority for scientific computation or rendering.

The responsibility should be separated as follows:

```text
Vidya
  ↓
Educational Reasoning
  ↓
Educational / Visual Intent
  ↓
Scene Specification
  ↓
Schema + Scientific Validation
  ↓
Deterministic Domain Engines
  ↓
Renderer / Simulation Runtime
```

### 1.3 Vidya 4B vs. Vidya 9B

The Vidya 4B model was used primarily for architecture and capability testing on free Google Colab, where compute and VRAM are constrained.

The Vidya 9B model is the stronger candidate for production evaluation because it is larger and its model documentation reports stronger accuracy than the 4B variant.

Therefore, the results obtained from Vidya 4B should be interpreted as evidence that the proposed architecture and Vidya's capabilities are viable, but not as the final production performance of Vidya 9B.

The 9B model still needs to be benchmarked under the same Niera-specific evaluation framework.

### 1.4 Critical Architectural Principle

The experiments exposed an important architectural boundary:

The LLM should decide what the student needs to learn and see; deterministic systems should calculate and render it.

For example, Vidya should determine that a projectile-motion visualization needs:

- A projectile
- Horizontal velocity
- Vertical velocity
- Gravity
- Parabolic trajectory
- Appropriate labels and animation

However, a deterministic physics engine should calculate the actual:

- Position
- Velocity
- Acceleration
- Trajectory
- Flight time
- Impact point

This prevents the LLM from becoming the scientific authority or renderer.

### 1.5 Current Strategic Position

| Responsibility | Status |
| --- | --- |
| Educational reasoning | Candidate / Yes |
| JEE/NEET tutoring | Yes |
| Misconception correction | Promising |
| Student-level adaptation | Promising |
| Visual intent generation | Promising |
| Final scene specification generation | Candidate; requires architecture refinement |
| Scientific authority | No |
| Physics calculations | No |
| Rendering | No |
| Image generation | No |
| 3D generation | No |
| Simulation runtime | No |

### 1.6 Production Decision Status

Vidya's architectural role is nearly defined, but the exact production model is not yet locked.

The remaining question is:

Does Vidya 9B provide enough improvement over Niera's existing model and other candidates to justify its additional compute and latency?

This should be answered through a final controlled benchmark rather than assumption.

---

## 2. Vidya Model Profile

### 2.1 What Is Vidya?

Vidya is fundamentally a text-generation language model specialized for educational use.

The models investigated are:

- neo-saket/vidya-4b
- neo-saket/vidya-9b

The 4B model was used for the initial Niera experiments because it could be practically deployed in the available Colab environment.

Conceptually:

```text
Student Question
      ↓
Vidya
      ↓
Text / Structured Text Output
```

Vidya does not inherently generate:

- Rendered images
- 2D animations
- 3D scenes
- Interactive simulations
- Physics simulations
- Pixel-level graphics

Niera uses Vidya's language capability as an upstream educational reasoning component.

### 2.2 Base Model and Educational Specialization

Vidya is based on the Qwen model family and has been fine-tuned for educational applications.

Its reported educational coverage includes:

- NCERT Classes 6-12
- Physics
- Chemistry
- Biology
- Mathematics
- Social Science
- IIT-JEE Main
- IIT-JEE Advanced
- NEET UG

This makes Vidya particularly relevant to Niera's current competitive-examination focus.

### 2.3 Training and Fine-Tuning Approach

The Vidya model family uses a multi-stage educational fine-tuning approach.

The reported general pipeline is:

```text
Base Qwen Model
      ↓
Educational / Domain Training
      ↓
Supervised Fine-Tuning
      ↓
Preference Optimization
      ↓
Vidya
```

The training is intended to improve not only factual knowledge but also tutoring behavior, including:

- Educational explanations
- Step-by-step reasoning
- Pedagogical clarity
- Misconception handling
- Appropriate difficulty
- Student-friendly responses

The 4B variant specifically uses educational datasets involving NCERT and competitive-examination material, followed by preference optimization.

### 2.4 Vidya 4B

The 4B model was selected for the initial Niera experiments primarily because it provided a practical environment for rapid architecture validation.

Experimental environment:

- Model: Vidya 4B
- Framework: Hugging Face Transformers
- GPU: NVIDIA T4
- Precision: BF16
- Device: CUDA
- Loaded model memory: approximately 8.4 GB

The model successfully loaded and generated responses in the Colab environment.

During testing, inference produced warnings related to missing optimized components such as:

- causal_conv1d
- flash-linear-attention

These were performance warnings rather than model failures. The model continued to operate using reference PyTorch implementations.

The environment was deliberately kept stable rather than installing additional packages that could introduce Torch/Torchvision/Torchaudio compatibility problems.

### 2.5 Vidya 9B

Vidya 9B is the stronger production candidate among the two Vidya variants investigated.

Compared with the 4B version, the larger model is expected to provide stronger capability in areas such as:

- Complex reasoning
- Academic accuracy
- Multi-step problem solving
- Explanation quality
- Structured educational understanding

However, the larger model also requires more compute and can increase inference latency.

Therefore, Vidya 9B should be benchmarked, not automatically selected simply because it is larger.

The final decision should consider both quality and system-level latency.

### 2.6 What Vidya Should Do Inside Niera

Vidya's proposed responsibility is:

```text
Understand Student
      ↓
Understand Educational Problem
      ↓
Reason About Concept
      ↓
Identify Misconceptions
      ↓
Adapt to Student Level
      ↓
Determine Learning Approach
      ↓
Generate Educational / Visual Intent
```

For example, for a projectile-motion concept, Vidya can identify:

- Concept: Horizontal projectile motion
- Learning objective: Understand independent horizontal and vertical motion
- Visual requirements:
  - Projectile
  - Constant horizontal velocity
  - Increasing vertical velocity
  - Gravity
  - Parabolic trajectory
  - Appropriate labels

The downstream system then converts this intent into deterministic visual behavior.

### 2.7 What Vidya Should Not Do

Vidya should not be responsible for:

- Exact scientific computation
- Numerical simulation
- Pixel generation
- Final rendering
- Physics runtime
- 3D geometry execution
- Browser animation execution
- Final scientific validation

These responsibilities should be handled by specialized deterministic systems or dedicated generation models where appropriate.

### 2.8 Vidya's Relationship With Other Models

Vidya does not need to generate every modality itself.

Niera should instead use a modular architecture:

```text
                  Vidya / Educational Reasoning
                               ↓
                     Educational Intent
                               ↓
                 ┌──────────────┼──────────────┐
                 ↓              ↓              ↓
                2D             3D          Simulation
             Pipeline        Pipeline        Engine
                 ↓              ↓              ↓
             2D Renderer     3D System      Runtime
```

For the 2D pipeline, Qwen3-Coder can be evaluated as a scene specification generator for complex cases, but it should not necessarily run sequentially for every request.

A faster deterministic scene compiler should handle known educational primitives wherever possible.

---

## 3. Why Vidya Is Relevant to Niera

### 3.1 Alignment With Niera's Educational Objective

Niera is designed around highly personalized learning, AI teaching companions, structured curriculum, and teacher-controlled educational experiences.

Niera's brand direction emphasizes that the AI companion should remain within the teacher's lesson and be controlled by the teacher rather than behave like a generic open-domain chatbot.

This requires an educational reasoning system capable of understanding more than the literal question.

The desired reasoning flow is:

```text
Curriculum
    ↓
Concept
    ↓
Student Knowledge State
    ↓
Misconception
    ↓
Difficulty Level
    ↓
Teaching Strategy
    ↓
Explanation / Practice / Visualization
```

Vidya's specialization makes it a relevant candidate for this layer.

### 3.2 JEE/NEET Relevance

Niera's current chatbot focuses on competitive examinations such as:

- JEE Main
- JEE Advanced
- NEET

Vidya is explicitly trained toward the same educational domain.

This makes it particularly relevant for:

- Physics numericals
- Chemistry concepts
- Biology concepts
- Mathematics problems
- Multi-step reasoning
- Conceptual questions
- Misconception correction
- Exam-oriented explanations

During testing, Vidya successfully handled a JEE Physics mechanics problem involving:

- Mass = 2 kg
- Initial velocity = 3 m/s
- Net force = 10 N
- Time = 4 s

It correctly derived:

- a = 5 m/s²
- v = 23 m/s
- s = 52 m

The main observed concern in this test was output completeness or truncation rather than incorrect core calculation.

### 3.3 Educational Reasoning Capability

Vidya demonstrated the ability to transform academic questions into pedagogical explanations rather than simply returning formulas.

The tested reasoning pattern was:

```text
Student Question
      ↓
Identify Concept
      ↓
Identify Misconception
      ↓
Explain Correct Principle
      ↓
Give Intuitive Example
      ↓
Adapt Explanation to Student
```

This behavior is valuable for Niera because the objective is not merely to provide answers, but to help students understand why an answer is correct.

### 3.4 Misconception Correction

Vidya performed strongly in the tested misconception-correction scenarios.

Examples tested included:

- "Moving objects must have force acting on them."
- "Heavier objects fall faster."
- "Current gets used up in a circuit."
- "Force is the same thing as acceleration."

Vidya generally:

- Identified the incorrect mental model
- Explained the correct physical principle
- Used an intuitive example or analogy
- Adapted the explanation to the requested student level

However, some explanations contained scientifically imprecise wording. For example, statements such as:

> "Force is only needed to start, stop, or change direction."

can be misleading because the correct underlying principle concerns net force and change in velocity.

This reinforces an important Niera requirement:

```text
LLM reasoning
      ↓
Scientific validation / grounding
      ↓
Student-facing output
```

Vidya should therefore not be treated as infallible.

### 3.5 Student-Level Personalization

Vidya was tested with explicit student context such as:

- Class 9
- Weak in the topic
- Specific misconception
- Use simple language
- Avoid advanced mathematics
- Use analogy
- Explain step-by-step

The resulting response adapted reasonably well to the student's requested level and learning needs.

This aligns well with Niera's broader personalization architecture, where the model can receive structured information from the student knowledge graph:

```text
Niera Student Profile
       ↓
Known Concepts
Weak Concepts
Misconceptions
Learning History
Difficulty Level
       ↓
Vidya
       ↓
Personalized Teaching Response
```

The long-term objective is therefore not merely:

Question → Answer

but rather:

```text
Question
   +
Student State
   +
Curriculum Context
   +
Learning History
   ↓
Personalized Teaching Strategy
```

### 3.6 Visual Learning Integration

The most important relevance to the current 2D-generation work is Vidya's ability to identify what a student should see to understand a concept.

In the projectile-motion experiment, Vidya identified visual elements such as:

- Projectile
- Horizontal velocity
- Vertical velocity
- Gravity
- Parabolic trajectory
- Labels
- Animation

This demonstrates that a language model can potentially act as the educational planner for Niera's visualization pipeline.

However, the same experiment exposed an important limitation: Vidya can understand the concept while still generating an imperfect low-level visual representation.

For example, the generated trajectory representation initially mixed:

- Physical quantities
- Screen coordinates
- Rendering parameters
- Mathematical equations

and attempted to describe the trajectory directly.

Therefore, the correct architecture is:

```text
Vidya
   ↓
Educational / Visual Intent
   ↓
Structured Scene Representation
   ↓
Scientific Engine
   ↓
Renderer
```

rather than:

```text
Vidya
   ↓
Raw rendering instructions
   ↓
Final visual
```

### 3.7 Strategic Benefit to Niera

If Vidya 9B performs sufficiently well in the final benchmark, it could provide Niera with a specialized educational reasoning layer capable of supporting:

- Curriculum-aware tutoring
- JEE/NEET problem solving
- Misconception correction
- Student-level adaptation
- Pedagogical explanations
- Visual learning intent
- Structured educational planning

The strategic value is therefore not that Vidya itself generates visuals. Its potential value is that Vidya can become the educational intelligence that determines what the student should learn, understand, practice, and visualize.

Niera can then combine this intelligence with:

```text
Educational Reasoning
        +
Student Knowledge Graph
        +
Personalization
        +
Deterministic Scientific Engines
        +
2D / 3D / Simulation Systems
        +
Specialized Generative Models
        ↓
Personalized Interactive Learning
```

This separation should remain fundamental as Niera expands from the current 2D visualization system into 3D, simulations, and other multimodal educational experiences.

## 4. General Niera Multimodal Architecture

### 4.1 Architectural Objective

Niera should not depend on a single model to generate every type of learning experience.

Different educational outputs have fundamentally different technical requirements:

- Text requires language reasoning.
- 2D visualizations require structured graphics and deterministic calculations.
- 3D experiences require geometry, assets, spatial relationships, and rendering.
- Simulations require executable mathematical/physical behavior.
- AI-generated images require a dedicated image-generation pipeline.

Therefore, Niera should use a shared educational intelligence layer with specialized downstream pipelines.

### 4.2 General Architecture

```text
                           STUDENT
                              ↓
                    Niera Student Context
                              ↓
                ┌─────────────────────────┐
                │ Knowledge Graph /       │
                │ Learning Profile /      │
                │ Curriculum Context      │
                └────────────┬────────────┘
                             ↓
                  Educational Reasoning
                    (Vidya / Candidate)
                             ↓
                   Educational Intent
                             ↓
              ┌──────────────┼──────────────┐
              ↓              ↓              ↓
             2D             3D         Simulation
           Pipeline        Pipeline       Pipeline
              ↓              ↓              ↓
       Scene Compiler    3D Generator   Sim. Planner
              ↓              ↓              ↓
       Scientific /      Geometry /     Domain Engine
       Math Engines       Physics          ↓
              ↓              ↓          Runtime
         2D Renderer      3D Renderer
              ↓              ↓              ↓
           2D Visual       3D Visual    Interactive
                                          Simulation
```

A separate image-generation pipeline can be connected when the educational objective requires a generated image rather than a deterministic visualization.

### 4.3 Shared Educational Intelligence Layer

The shared layer should provide common information to every downstream system:

```text
Student
├── Grade / Exam
├── Current Chapter
├── Concept
├── Mastery
├── Weak Areas
├── Known Misconceptions
├── Learning History
├── Preferred Explanation Level
└── Current Learning Objective
```

This prevents every generation pipeline from independently trying to infer the student's learning state.

### 4.4 Role of Vidya

Vidya should primarily operate at the educational reasoning layer.

Its responsibilities can include:

```text
Understand Question
        ↓
Understand Curriculum Context
        ↓
Reason About Concept
        ↓
Identify Student Difficulty
        ↓
Select Teaching Strategy
        ↓
Generate Answer
        ↓
Determine Visual / Interactive Requirement
```

The same educational intent can then be consumed by different systems.

For example:

"Explain projectile motion"

could produce:

- 2D → Projectile trajectory visualization
- 3D → 3D projectile scene
- Simulation → Interactive velocity/gravity simulation
- Text → Step-by-step explanation

### 4.5 Modular Model Strategy

Niera should avoid assuming that one model must perform every generation task.

The architecture should permit:

```text
Educational Model
      ↓
2D Model / Compiler
      ↓
3D Model / Generator
      ↓
Simulation Model / Planner
      ↓
Image Model
```

Each component can be independently replaced, optimized, quantized, or scaled.

This provides:

- Lower latency
- Better specialization
- Easier debugging
- Independent benchmarking
- Lower compute requirements
- More reliable outputs

---

## 5. Curated 2D Architecture — Current Direction

### 5.1 Objective

The current Niera work focuses on building a 2D educational visualization pipeline capable of converting student questions into scientifically correct, interactive visual explanations.

The architecture should prioritize:

- Scientific correctness
- Educational usefulness
- Deterministic behavior
- Low latency
- Extensibility across subjects
- Separation between reasoning and rendering

### 5.2 Curated 2D Architecture

```text
Student Question
      ↓
Niera Student Context / Knowledge Graph
      ↓
Educational Reasoning Model
(Vidya 9B — candidate)
      ↓
Educational / Visual Intent
      ↓
Scene Spec Compiler
 ┌───────────────┐
 │ Known Niera   │
 │ primitives    │
 └───────┬───────┘
         ↓
   Scene Spec JSON
         ↓
 ┌─────────────────────┐
 │ Schema Validator    │
 │ Scientific Validator│
 └──────────┬──────────┘
            ↓
     Repair Loop
            ↓
 ┌─────────────────────────────┐
 │ Deterministic Domain Engine │
 │                             │
 │ Physics                     │
 │ Mathematics                 │
 │ Geometry                    │
 │ Chemistry                   │
 │ Biology                     │
 └──────────────┬──────────────┘
                ↓
         2D Scene State
                ↓
          2D Renderer
                ↓
      Interactive Visualization
```

### 5.3 Vidya → Visual Intent

Vidya should not directly generate a complete low-level rendering specification whenever possible.

Instead, it should produce a compact semantic intent.

Example:

```json
{
  "visual": "projectile_motion",
  "initial_conditions": {
    "height_m": 20,
    "v0x_mps": 10,
    "v0y_mps": 0
  },
  "show": [
    "trajectory",
    "vx",
    "vy",
    "gravity"
  ]
}
```

This is significantly preferable to asking the model to generate hundreds of lines containing coordinates, styling, equations, and animation parameters.

### 5.4 Scene Spec Compiler

The Scene Spec Compiler converts educational intent into Niera's internal visual representation.

For known educational primitives:

- projectile_motion
- free_fall
- vector
- force_diagram
- graph
- circle
- tangent
- ray
- circuit
- molecule
- cell
- etc.

The compiler should use deterministic templates and domain logic.

This means the system does not need an additional LLM for every visualization.

### 5.5 Where Qwen3-Coder Fits

Qwen3-Coder should not automatically execute for every request.

A latency-efficient strategy is:

```text
                    Visual Intent
                         ↓
              Can Niera compile this
                 deterministically?
                    ↙       ↘
                  YES        NO
                   ↓          ↓
            Scene Compiler   Qwen3-Coder
                   ↓          ↓
                   └────┬─────┘
                        ↓
                   Scene Spec
```

Known/simple concepts: use deterministic compilation.

Complex/unusual concepts: use Qwen3-Coder as a fallback or advanced Scene Spec/code-generation component.

This prevents unnecessary sequential model inference.

### 5.6 Scientific Validation

The LLM should not be trusted as the final scientific authority.

The validation layer should check:

```text
Schema
 ↓
Required fields
 ↓
Object types
 ↓
Units
 ↓
Physical constraints
 ↓
Mathematical consistency
 ↓
Domain-specific rules
```

If an error is detected:

```text
Scene Spec
    ↓
Validator
    ↓
Error
    ↓
Repair
    ↓
Validator
    ↓
PASS
```

This repair-loop architecture was successfully demonstrated during the MVP experiments.

### 5.7 Deterministic Domain Engines

The domain engine should calculate the actual scientific state.

For projectile motion:

```text
Input:
h
v0x
v0y
g

        ↓

Physics Engine

        ↓

x(t)
y(t)
vx(t)
vy(t)
ax(t)
ay(t)
trajectory
flight time
impact point
```

The renderer then visualizes these computed states.

This is substantially safer than allowing the LLM to invent the mathematical trajectory.

### 5.8 2D Renderer

The current Pillow-based executor is an MVP/proof-of-concept renderer.

It has already demonstrated:

- Reading scene data
- Creating objects dynamically
- Computing free-fall motion
- Rendering animations
- Producing GIF output
- Reacting to changes in Scene Spec without changing renderer logic

The final Niera renderer should eventually move toward a browser/GPU-oriented implementation suitable for interactive experiences and low latency.

Potential technologies can be evaluated later, including:

- Canvas
- SVG
- WebGL
- WebGPU

The current Pillow implementation should therefore be considered a validation tool, not the final production renderer.

---

## 6. Why Qwen3-Coder Exists and When It Should Be Used

### 6.1 The Latency Problem

A naive architecture would be:

```text
Student
   ↓
Vidya 9B
   ↓
Wait
   ↓
Qwen3-Coder
   ↓
Wait
   ↓
Scene Spec
   ↓
Renderer
```

This creates sequential inference latency:

```text
Total latency
≈ Vidya latency
+ Qwen latency
+ validation
+ computation
+ rendering
```

Therefore, blindly placing Qwen3-Coder after Vidya for every request would be a poor production decision.

### 6.2 Why Qwen3-Coder Can Still Be Valuable

Qwen3-Coder can potentially handle cases where deterministic compilation is insufficient.

Examples:

- Complex scene structures
- Unusual visual relationships
- Advanced animations
- Multi-object interactions
- Generated rendering logic
- Novel educational visualizations
- Cases outside the predefined primitive library

Thus Qwen should be treated as a specialized capability, not a mandatory sequential stage.

### 6.3 Preferred Latency-Aware Architecture

```text
Student
   ↓
Educational Reasoning
   ↓
Visual Intent
   ↓
Complexity Router
   ├───────────────┐
   ↓               ↓
Simple            Complex
   ↓               ↓
Niera Compiler   Qwen3-Coder
   ↓               ↓
   └───────┬───────┘
           ↓
      Scene Spec
           ↓
      Validation
           ↓
    Domain Engines
           ↓
        Renderer
```

The majority of common educational visualizations should ideally follow the fast deterministic path.

Qwen should be invoked only when the request requires capabilities that the compiler cannot reliably provide.

### 6.4 Target Latency Philosophy

The target should not be interpreted as:

> "Make every individual model generate an output in 2–4 seconds."

The target should be:

Make the complete student-facing experience feel responsive within approximately 2–4 seconds for common visualization requests.

This can be achieved through:

- Small structured outputs
- Deterministic compilers
- Specialized domain engines
- Quantized inference
- Optimized model serving
- Caching
- Parallelization where possible
- Progressive rendering
- Avoiding unnecessary model calls

For complex requests, a longer latency budget may be acceptable if the resulting learning experience provides significantly more value.

### 6.5 Current Architectural Principle

The current 2D architecture should therefore follow:

Use the strongest reasoning model necessary for educational understanding, the smallest deterministic system possible for known visual primitives, and a stronger generative model only when the deterministic path cannot handle the request.

This keeps Niera's architecture modular while controlling latency and improving scientific reliability.

## 7. Experimental Setup

### 7.1 Objective of the Experiments

The initial experiments were designed to determine whether Vidya could serve as a viable educational reasoning component within Niera and whether its outputs could be connected reliably to a structured 2D visualization pipeline.

The experiments were intentionally performed on a constrained environment before considering production infrastructure.

The testing objectives were:

- Evaluate educational understanding
- Evaluate JEE/NEET-style reasoning
- Test misconception correction
- Test student-level personalization
- Test structured output generation
- Test Scene Spec generation
- Test scientific validation
- Test automatic repair
- Test deterministic 2D execution
- Test cross-concept generalization
- Observe inference latency and output reliability

### 7.2 Testing Environment

The initial experiments used Google Colab with a T4 GPU.

```text
Environment
├── Platform: Google Colab
├── GPU: NVIDIA T4
├── Python: 3.13.15
├── PyTorch: 2.14.0 + CUDA 13.0
├── Transformers: 5.17.0
├── Accelerate: 1.15.0
├── Model: neo-saket/vidya-4b
└── Precision: BF16
```

The 4B model was selected because it was practical to load within the available free GPU environment.

The testing environment intentionally avoided destabilizing the installation with incompatible auxiliary packages. torchvision and torchaudio were removed after compatibility issues with the installed PyTorch/CUDA configuration.

### 7.3 Inference Configuration

The model was loaded using:

```python
model = AutoModelForCausalLM.from_pretrained(
    "neo-saket/vidya-4b",
    dtype=torch.bfloat16,
    device_map="auto"
)
```

The chat template was configured with thinking disabled for the structured-output experiments.

The testing helper used:

- Temperature: generally 0.1–0.2
- Generation: controlled max_new_tokens
- Thinking mode: disabled
- Device: CUDA

This configuration was chosen primarily to obtain concise and predictable outputs suitable for structured processing.

### 7.4 Important Environment Limitation

The inference environment produced warnings indicating that optimized implementations such as:

- causal_conv1d
- flash-linear-attention

were unavailable.

The model therefore used reference PyTorch implementations for those operations.

These warnings did not prevent model execution, but they may negatively affect inference performance.

Therefore, the observed Colab latency should not be treated as the final production latency of Vidya.

### 7.5 Latency Measurement

Generation time was measured around individual model-generation calls.

This allowed us to distinguish:

- LLM Generation
- JSON Validation
- Physics Computation
- Rendering

This distinction became important because the experiments showed that the majority of the observed delay in visualization-generation tests came from LLM generation rather than deterministic processing.

For example:

- Test 14B
- Generation time ≈ 57.33 seconds

This is unacceptable as a target for an interactive Niera visualization pipeline.

However, it is an MVP/Colab measurement, not a production benchmark.

### 7.6 Testing Philosophy

The experiments were divided into progressively more difficult stages.

```text
Level 1
Educational Understanding
        ↓
Level 2
JEE/NEET Reasoning
        ↓
Level 3
Misconception + Personalization
        ↓
Level 4
Structured Educational Output
        ↓
Level 5
Scene Spec Generation
        ↓
Level 6
Scientific Validation
        ↓
Level 7
Automatic Repair
        ↓
Level 8
Deterministic Rendering
        ↓
Level 9
Cross-Domain Generalization
```

This progression was important because a model can perform well at educational conversation while still failing at machine-readable visual specification.

---

## 8. Tests 1–18: Detailed Experimental Results

### 8.1 Test 1 — NCERT Concept Understanding

#### Objective

Evaluate whether Vidya can explain a standard NCERT concept at the requested student level.

#### Prompt

The model was asked to explain photosynthesis to a Class 7 student, including:

- What photosynthesis is
- Requirements
- Products
- A simple analogy
- Result

#### Result

PASS

Vidya produced a clear and structured Class-7-level explanation.

It correctly covered:

- Sunlight
- Water
- Carbon dioxide
- Chlorophyll
- Glucose
- Oxygen

#### Evaluation

| Criterion | Result |
| --- | --- |
| Scientific accuracy | 8/10 |
| Class-level suitability | 9/10 |
| Completeness | 9/10 |
| Explanation quality | 9/10 |
| Analogy | 7/10 |
| NCERT alignment | 8/10 |

#### Observed Issues

Some analogy wording was scientifically imperfect, particularly:

- Describing chlorophyll as the "chef"
- Describing oxygen as analogous to steam escaping

These are acceptable pedagogically but should be controlled when precision is important.

### 8.2 Test 2 — JEE Physics Reasoning

#### Objective

Test numerical problem solving at a JEE-oriented level.

#### Problem

A 2 kg body has:

- Initial velocity = 3 m/s
- Net force = 10 N
- Time = 4 s

Expected reasoning:

```text
a = F / m
a = 10 / 2
a = 5 m/s²

v = u + at
v = 3 + (5 × 4)
v = 23 m/s

s = ut + ½at²
s = (3 × 4) + ½(5)(16)
s = 52 m
```

#### Result

PASS

Vidya produced the correct core calculations and reasoning.

#### Observed Issue

The generated response was partially truncated during the test.

This indicates that output-length control and completion reliability must be considered separately from reasoning accuracy.

### 8.3 Test 3 — Misconception Correction

#### Objective

Test whether Vidya can distinguish velocity from force/acceleration.

#### Student Misconception

A moving object must have a large force acting on it.

#### Result

PASS

Vidya correctly explained that:

```text
Net force → acceleration
```

and that an object can continue moving at constant velocity when the net force is zero.

It used a hockey-puck-style example to make the distinction intuitive.

#### Observed Issue

Some wording around engines maintaining constant speed was less precise because engine force can balance resistive forces.

The underlying conceptual correction was nevertheless strong.

### 8.4 Test 4 — Student Personalization

#### Student Context

- Class: 9
- Weak in topic
- Misconception: "Current gets used up"
- Requirements:
  - Simple analogy
  - Step-by-step
  - No advanced mathematics

#### Result

STRONG PASS

Vidya adapted the response to the requested level and directly addressed the misconception.

It used an intuitive analogy and introduced charge/current conservation at an appropriate conceptual level.

#### Observed Issues

Some statements were too broad, such as:

> "Current is exactly the same at every point in a circuit."

This requires qualification in circuits containing branches.

The phrase:

> "Electrons move in a circle"

is also an oversimplification.

#### Conclusion

Strong personalization, but scientific grounding remains necessary.

### 8.5 Test 5 — Multiple Misconceptions

#### Objective

Test whether Vidya can simultaneously correct several misconceptions.

#### Misconceptions

1. Moving means force must be acting.
2. Heavier objects fall faster.
3. Force = acceleration.

#### Result

PARTIAL PASS

Vidya correctly addressed the major conceptual errors.

However, it used wording equivalent to:

> Force is only needed to start, stop, or change direction.

This is pedagogically understandable but scientifically incomplete.

The correct framing is based on net force causing acceleration/change in velocity.

#### Conclusion

Promising misconception handling, but precision must be enforced through Niera's validation/grounding layer.

### 8.6 Test 6 — Structured Educational Understanding

#### Objective

Test whether Vidya can produce a predefined educational structure.

#### Required sections

- CONCEPT
- CORE_MISCONCEPTION
- CORRECT_EXPLANATION
- EXAMPLE
- KEY_FACT
- VISUALIZATION
- CHECK_QUESTION

#### Concept

Whether heavier objects fall faster than lighter objects in ideal free fall.

#### Result

STRONG BUT INCOMPLETE

Vidya correctly explained:

```text
F = ma
Fg = mg
```

and showed why mass cancels in the ideal free-fall acceleration relationship.

The visualization explanation was also useful.

#### Failure

The output was truncated before the required CHECK_QUESTION section.

#### Conclusion

The model understood the educational structure, but structured-output completion reliability remains a technical concern.

### 8.7 Test 7 — Initial Scene Spec Generation

#### Objective

Determine whether Vidya can translate a physics concept into a machine-readable visualization specification.

#### Concept

Free fall comparing objects with different masses.

#### Result

PARTIAL PASS

Vidya generated:

- Multiple visual objects
- Object masses
- Positions
- Gravity
- Animation concepts
- Labels
- Learning objective

#### Important Failure

The output mixed physical coordinates and screen coordinates.

For example, a value such as:

```text
release_height = 300
```

could be interpreted as either pixels or meters.

This initially caused the scientific validator to interpret the scene incorrectly.

#### Architectural Lesson

Physical space and rendering space must be explicitly separated:

```text
Physical World
meters
kg
m/s
m/s²

        ≠

Screen Space
pixels
x
y
width
height
```

This became a core requirement of the Scene Spec architecture.

### 8.8 Test 8 — Scientific / Schema Validation

#### Objective

Prevent visually plausible but scientifically incorrect model output from reaching the renderer.

A corrected Scene Spec separated:

```text
initial_position_px
```

from:

```text
release_height_m
```

and represented physical quantities explicitly.

The validator checked:

- Gravity
- Release height
- Mass
- Time to impact
- Air resistance assumptions
- Physical consistency

For example:

```text
t = √(2h/g)
```

was used to verify the expected impact time.

#### Result

PASS

The corrected Scene Spec passed the physics validation.

#### Key Finding

The validator should be treated as a scientific authority, not the LLM.

### 8.9 Test 9 — Automatic Repair Loop

#### Objective

Test whether an invalid Scene Spec can be repaired automatically.

#### Architecture

```text
Vidya
 ↓
Scene Spec
 ↓
Validator
 ↓
Error
 ↓
Vidya Repair
 ↓
Validator
 ↓
PASS
```

#### Result

PASS

The generated Scene Spec was passed through validation and the repair process successfully produced a valid result.

#### Significance

This demonstrated that Niera can build a self-correcting structured-generation loop rather than relying on a single LLM generation attempt.

### 8.10 Test 10 — 2D Executor

#### Objective

Convert a validated Scene Spec into an actual visual output.

Manim installation was attempted but caused environment/build issues in Colab.

Instead of destabilizing the ML environment, a lightweight Pillow-based renderer was used.

#### Result

PASS

The executor successfully:

- Read the Scene Spec
- Extracted physical parameters
- Calculated free-fall behavior
- Created object representations
- Generated an animated GIF

The output demonstrated that the LLM-generated structured representation could reach an actual rendered visualization.

#### Important Limitation

Pillow was used only as an MVP renderer.

It is not the final Niera rendering architecture.

### 8.11 Test 11 — Data-Driven 2D Executor

#### Objective

Verify that the renderer responds to Scene Spec changes without modifying renderer code.

A generic draw_object() system was introduced for supported object types.

The renderer dynamically read:

- Scene dimensions
- Ground position
- Physical height
- Gravity
- Object positions
- Object types
- Object masses

#### Experiment

The physical release height was changed from the previous value to:

```text
10 m
```

without changing the renderer implementation.

#### Result

PASS

The renderer generated a new visualization based on the changed Scene Spec.

#### Significance

This established the basic principle:

The renderer should be data-driven rather than hard-coded to individual demonstrations.

### 8.12 Test 12 — Scene Spec Schema Validation

#### Objective

Ensure that model outputs conform to a predictable machine-readable structure.

The initial schema required:

```text
concept
objects
scene
physics
animations
learning_goal
```

and defined allowed object/action types.

#### Initial Failure

An existing Scene Spec did not contain:

- animations
- learning_goal

#### Repair

These fields were added and validated.

#### Result

PASS

The corrected Scene Spec passed the schema validator.

#### Lesson

Schema enforcement should happen before rendering.

### 8.13 Test 13 — Newton's Second Law

#### Objective

Determine whether the system generalizes beyond free-fall examples.

#### Concept

A 2 kg block experiences a 10 N net horizontal force.

The visualization was designed to show:

```text
F = ma
```

and the corresponding acceleration.

#### Result

PASS

Vidya generated a valid Scene Spec compatible with the tested schema.

#### Significance

This demonstrated initial generalization from:

- Free Fall

to:

- Newton's Second Law

### 8.14 Test 14 — Projectile Motion

#### Objective

Test a more complex physics visualization involving:

- Horizontal velocity
- Vertical acceleration
- Gravity
- Parabolic trajectory
- Vector representation
- Animation

#### Initial Result

FAIL / PARTIAL

The first output contained several issues:

- Invalid/truncated JSON
- Straight-line trajectory representation
- Mixing screen coordinates and physical values
- Weak animation semantics
- Inconsistent schema naming
- Vector animation that did not actually represent changing velocity

#### Key Finding

The model understood the concept, but its low-level representation was unreliable.

This was the first strong indication that Vidya should not directly control the complete rendering representation.

### 8.15 Test 14B — Compact Projectile Visual Intent

A second controlled experiment was performed after identifying the Test 14 problems.

The prompt explicitly required:

- Compact JSON
- Semantic curve
- Mathematical trajectory
- SI units
- Separation of physical quantities and screen coordinates
- No unnecessary styling
- No explanation

#### Result

JSON VALID

Generation time:

```text
57.33 seconds
```

The output successfully represented:

- Projectile
- Horizontal velocity
- Vertical velocity
- Gravity
- Parabolic trajectory
- Animation
- Learning objective

#### Remaining Issues

The output still contained architectural problems:

- Duplicate "type" field
- Physical and screen quantities remained mixed
- The model generated the trajectory equation itself
- Animation parameters did not represent true physical velocity evolution
- Schema conventions were inconsistent

#### Conclusion

- Concept Generation: PASS
- Visual Intent: PASS
- Production Scene Spec: PARTIAL

This test led directly to the current architecture:

The LLM should specify the physical intent; deterministic domain engines should calculate the actual trajectory.

### 8.16 Test 15 — Electric Field

#### Objective

Test cross-domain physics generalization involving field/vector visualization.

#### Result

PASS

The generated output passed the tested schema.

This indicated that the model could extend its structured visual understanding beyond basic mechanics.

Further scientific validation is still required before considering this production-ready.

### 8.17 Test 16 — Circle / Tangent Geometry

#### Objective

Test mathematical visualization and geometric relationships.

#### Result

SCHEMA FAILURE

Observed issues included:

- Object missing id
- Unsupported object type: circle
- Repeated object/schema errors

#### Significance

This failure was important because it revealed that the problem was not necessarily mathematical understanding alone.

The system lacked sufficient domain-specific primitives for geometry.

The current generic object schema therefore needs to evolve toward semantic primitives such as:

- circle
- tangent
- arc
- angle
- coordinate_axis
- point

rather than forcing every mathematical visualization into low-level generic shapes.

### 8.18 Test 17 — Chemical Bond

#### Objective

Test cross-domain generalization into chemistry.

#### Result

FAIL

The generated output was invalid JSON.

#### Significance

This demonstrates that the current structured-generation approach is not yet equally reliable across domains.

Chemistry will likely require dedicated semantic primitives such as:

- atom
- bond
- molecule
- electron_pair
- lone_pair
- charge
- orbital

rather than relying entirely on generic graphics primitives.

### 8.19 Test 18 — Photosynthesis

#### Objective

Test biological-process visualization.

#### Result

PASS

The generated Scene Spec passed the schema validation.

This indicates that Vidya can produce structured visual representations beyond physics and mathematics.

However, as with Test 15, passing the schema does not automatically guarantee biological correctness.

A domain-specific biological validator will eventually be required.

### 8.20 Tests 14–18 Summary

| Test | Domain | Result | Main Observation |
| --- | --- | --- | --- |
| 14 | Projectile Motion | ❌ / Partial | Concept understood, low-level representation unreliable |
| 14B | Projectile Motion | 🟡 Partial | Valid compact JSON; architecture still needs separation |
| 15 | Electric Field | ✅ | Schema passed |
| 16 | Circle/Tangent | ⚠️ Failed | Missing semantic geometry primitives |
| 17 | Chemical Bond | ❌ Failed | Invalid JSON |
| 18 | Photosynthesis | ✅ | Schema passed |

### 8.21 Overall Experimental Pattern

The tests reveal a consistent pattern:

```text
Educational Understanding
        ↓
        Strong

Conceptual Reasoning
        ↓
        Strong / Promising

Misconception Handling
        ↓
        Strong with precision caveats

Personalization
        ↓
        Strong / Promising

Structured JSON
        ↓
        Moderate

Scientific Reliability
        ↓
        Requires deterministic validation

Complex Scene Generation
        ↓
        Not yet reliable

Direct LLM → Renderer
        ↓
        Not recommended
```

The most important conclusion is therefore not simply that Vidya "passed" or "failed."

The experiments demonstrate that Vidya is more valuable as an educational reasoning and intent-generation model than as a direct visualization-specification or rendering model.

---

## 9. Performance and Failure Analysis

### 9.1 Educational Performance

Across the initial tests, Vidya demonstrated strong capability in educational reasoning.

Observed strengths included:

- Clear concept explanations
- Appropriate student-level language
- Step-by-step problem solving
- Misconception identification
- Use of intuitive examples
- JEE/NEET-oriented reasoning
- Structured educational responses
- Ability to identify useful visual elements

The strongest results were observed in educational understanding, misconception correction, and personalization.

### 9.2 JEE / Complex Problem Performance

Vidya successfully handled the tested JEE Physics mechanics problem and produced correct core calculations.

It demonstrated the ability to reason through:

```text
Force
 ↓
Acceleration
 ↓
Velocity
 ↓
Displacement
```

This is encouraging for Niera's competitive-exam use case.

However, the current test set is not sufficient to establish production-level JEE performance.

A larger benchmark is required containing:

- Multi-step JEE Main problems
- JEE Advanced problems
- Numerical-answer questions
- Conceptual questions
- Multiple-choice questions
- Multi-concept problems
- Distractor-heavy questions
- Problems requiring diagrams
- Problems requiring careful unit handling

Therefore:

The current experiments demonstrate capability, not a final JEE accuracy benchmark.

### 9.3 Misconception Handling

Misconception correction was one of Vidya's strongest observed capabilities.

The model generally did more than provide the correct answer. It attempted to identify the student's incorrect mental model and replace it with a more intuitive explanation.

However, some responses contained scientifically imprecise statements.

This means Niera should not simply trust model output.

The preferred approach is:

```text
Vidya
 ↓
Educational Explanation
 ↓
Domain / Knowledge Validation
 ↓
Correction if Required
 ↓
Student
```

### 9.4 Personalization Performance

Vidya responded reasonably well when explicit student context was supplied.

The test included:

- Class level
- Weakness
- Misconception
- Explanation complexity
- Preferred analogy
- Mathematical constraints

The output adapted to these instructions.

This is particularly important for Niera because the final implementation can provide richer context from its student knowledge graph.

The model should therefore not receive only:

> "What is current?"

but potentially:

```text
Question
+
Grade
+
Chapter
+
Concept mastery
+
Known misconception
+
Previous attempts
+
Learning objective
```

### 9.5 Structured Output Reliability

Structured output is currently one of Vidya's weaker areas.

Observed failures included:

- Invalid JSON
- Truncated output
- Missing required fields
- Unsupported object types
- Duplicate fields
- Inconsistent naming conventions
- Low-level rendering details mixed with semantic information

This means the architecture should not depend on a single unconstrained generation call.

Niera should use:

```text
Constrained Output
        ↓
Schema Validation
        ↓
Semantic Validation
        ↓
Automatic Repair
        ↓
Final Scene Spec
```

### 9.6 Scientific Reliability

Vidya demonstrated good conceptual understanding but occasionally produced imprecise scientific representations.

Examples observed during testing included:

- Overly broad statements about current in circuits
- Imprecise force explanations
- Mixing physical and screen coordinates
- Incorrect or oversimplified visual representations
- Generating mathematical trajectories directly

The projectile-motion test was particularly revealing.

Vidya understood that the trajectory should be parabolic but initially represented it incorrectly as a straight line.

Therefore:

Semantic understanding and scientific execution must remain separate.

### 9.7 Visualization Generation Performance

The experiments demonstrated that Vidya can describe the required components of a visualization.

For example:

```text
Projectile
+ vx
+ vy
+ gravity
+ trajectory
+ labels
+ animation
```

However, directly converting this into low-level rendering instructions is unreliable.

The preferred representation is therefore:

```text
Educational Intent
        ↓
Semantic Scene Spec
        ↓
Deterministic Domain Engine
        ↓
Rendering
```

### 9.8 Latency

Latency is currently the largest practical weakness observed in the Colab experiments.

Example:

```text
Test 14B
Generation time: 57.33 seconds
```

Earlier structured-generation tests also produced generation times substantially above the desired interactive range.

This is not acceptable as the final student-facing latency.

However, these measurements were obtained using:

- Vidya 4B
- Free Colab
- NVIDIA T4
- Non-production inference setup
- Unoptimized attention/sequence components
- Relatively verbose structured outputs

Therefore, these numbers should be treated as baseline experimental measurements, not final production latency.

### 9.9 Latency Architecture

The target should be the latency of the complete student-facing experience, rather than forcing every individual model to finish within 2–4 seconds.

A preferred common-request pipeline is:

```text
Student Question
      ↓
Educational Reasoning
      ↓
Compact Visual Intent
      ↓
Deterministic Scene Compiler
      ↓
Domain Engine
      ↓
Renderer
```

The system should avoid:

```text
Vidya
 ↓
wait
 ↓
Qwen
 ↓
wait
 ↓
Renderer
```

for every request.

Qwen3-Coder should therefore be invoked selectively for complex cases.

### 9.10 Expected Latency Strategy

Latency can be improved through:

#### Model-side

- Smaller/faster specialist models where appropriate
- Quantization
- Optimized inference kernels
- Reduced output length
- Constrained decoding
- Production GPU serving

#### Architecture-side

- Deterministic compilation
- Caching
- Reusable scene primitives
- Avoiding unnecessary LLM calls
- Parallel processing where possible
- Progressive rendering

#### Product-side

The student should not necessarily wait for the entire visualization to be generated before seeing anything.

For example:

```text
0.0s → Question accepted
0.5–1.5s → Learning/visual intent
1–2s → Scene skeleton
2–4s → Interactive visualization
```

The exact production targets must be established through infrastructure benchmarking rather than assumed from Colab results.

### 9.11 4B → 9B Expectation

Vidya 9B is expected to provide stronger reasoning capability than the 4B model.

Potential improvements include:

- Better complex reasoning
- Better academic accuracy
- Better instruction following
- Better explanation quality
- Better visual-intent generation

But the larger model can also increase:

- VRAM requirements
- Inference cost
- Latency

Therefore, the correct production question is:

```text
Quality improvement from 9B
              VS
Additional latency + compute
```

This must be experimentally measured.

### 9.12 Primary Failure Categories

The current experiments identified five major failure categories:

| Failure | Severity | Required Solution |
| --- | --- | --- |
| Invalid JSON | High | Constrained generation + validation |
| Scientific imprecision | High | Domain validation |
| Low-level visual errors | High | Deterministic domain engines |
| Missing semantic primitives | Medium/High | Domain-specific Scene Spec |
| High inference latency | High | Model + serving + architecture optimization |

### 9.13 Key Architectural Lesson

The experiments strongly suggest that Niera should not optimize the wrong layer.

Trying to make Vidya generate increasingly detailed JSON faster is not the ideal solution.

Instead:

```text
Make Vidya's output:
        ↓
Shorter
More semantic
More structured
More constrained
        ↓
Move computation out of the LLM
        ↓
Move rendering out of the LLM
        ↓
Use deterministic engines
```

This simultaneously improves:

- Reliability
- Latency
- Debuggability
- Scientific correctness
- Scalability

---

## 10. Final Recommendations and Next Experiments

### 10.1 What Should Be Locked

The following architectural principles should be considered locked for the current Niera direction:

1. Vidya is an educational reasoning candidate

Vidya should primarily understand:

```text
Student
+
Curriculum
+
Concept
+
Learning State
+
Misconception
```

and determine the appropriate teaching strategy.

2. Vidya is not the renderer

The model should not generate pixels or directly control the rendering runtime.

3. Scientific computation is deterministic

Physics, mathematics, geometry, and other computable domains should be handled by deterministic engines wherever possible.

4. Validation is mandatory

No model-generated Scene Spec should directly reach the renderer without validation.

5. Scene representation should be semantic

Prefer:

- projectile_motion
- force_vector
- circle
- tangent
- molecule
- circuit

over forcing the LLM to describe everything as raw lines, coordinates, and arbitrary rendering parameters.

### 10.2 What Should Remain Configurable

The following should not yet be permanently locked:

- Vidya 4B vs. 9B
- Exact Scene Spec schema
- Qwen3-Coder usage frequency
- Final 2D rendering technology
- Final inference infrastructure
- Domain-specific primitive library
- Exact latency targets
- Quantization strategy

These should remain configurable until benchmark results justify a decision.

### 10.3 Recommended Production Role of Vidya

The current preferred role is:

```text
                   Niera
                     ↓
             Student Context
                     ↓
                 Vidya 9B
          Educational Reasoning
                     ↓
            Educational Intent
                     ↓
             Visual Intent
                     ↓
          ┌──────────┴──────────┐
          ↓                     ↓
  Deterministic Compiler     Complex Case
          ↓                     ↓
      Scene Spec          Qwen3-Coder
          └──────────┬──────────┘
                     ↓
                Validation
                     ↓
             Domain Engines
                     ↓
                  Renderer
```

Vidya should therefore be treated as the educational intelligence layer, while specialized components handle execution.

### 10.4 Qwen3-Coder Recommendation

Qwen3-Coder should remain part of the architecture as a candidate advanced Scene Spec / code-generation component, but not as a mandatory sequential model.

Recommended routing:

```text
Visual Intent
     ↓
Complexity Router
     ↓
 ┌───────────────┬────────────────┐
 ↓               ↓
Known Primitive  Complex / Novel
 ↓               ↓
Compiler         Qwen3-Coder
 ↓               ↓
 └───────┬───────┘
         ↓
    Scene Spec
```

This avoids paying the latency cost of a second LLM for simple educational visualizations.

### 10.5 Next Benchmark — Vidya 9B

The next major model experiment should be a controlled Vidya 9B benchmark.

The same prompts used with Vidya 4B should be run against 9B.

```text
                    Vidya 4B    Vidya 9B
                    ─────────    ─────────
Accuracy
Reasoning
JEE solving
Misconception correction
Personalization
Structured output
Visual intent
Scientific reliability
Generation latency
Tokens/sec
VRAM
```

This isolates the effect of model scale.

### 10.6 Final Niera Benchmark

After 9B testing, evaluate the strongest candidates on real Niera student queries.

Recommended initial benchmark:

- 30–50 real student queries

distributed across:

- Physics
- Chemistry
- Mathematics
- Biology

and:

- Conceptual
- Numerical
- Misconception
- Multi-step
- Visualization-required
- JEE Main
- JEE Advanced
- NEET

The benchmark should measure both educational quality and system performance.

### 10.7 Recommended Decision Matrix

The final model should not be selected solely on benchmark accuracy.

A useful decision matrix is:

| Category | Weight |
| --- | --- |
| Educational accuracy | High |
| JEE/NEET reasoning | High |
| Misconception handling | High |
| Personalization | High |
| Structured-output reliability | High |
| Scientific reliability | High |
| Latency | High |
| VRAM / infrastructure cost | Medium |
| Token efficiency | Medium |
| Deployment complexity | Medium |

The goal is to select the model that provides the best overall Niera system, not necessarily the model with the highest isolated benchmark score.

### 10.8 Immediate Development Sequence

The recommended development order is:

1. Finalize semantic 2D Scene Spec
2. Build deterministic physics primitives
3. Connect Scene Spec → Physics Engine
4. Connect Physics Engine → 2D Renderer
5. Test projectile motion end-to-end
6. Test Electric Field
7. Test Geometry
8. Test Chemistry
9. Test Biology
10. Benchmark Vidya 9B
11. Benchmark alternative models
12. Optimize latency / serving
13. Select production reasoning model

### 10.9 Final Position on Vidya

Based on the experiments completed so far:

Vidya is a promising candidate for Niera's educational reasoning layer, but it should not be used as the complete visual-generation system.

The experiments demonstrated meaningful strengths in:

- Educational understanding
- JEE-style reasoning
- Misconception correction
- Personalization
- Visual-intent generation

They also exposed limitations in:

- Structured output reliability
- Scientific precision
- Low-level visualization specification
- Cross-domain schema generalization
- Latency

The strongest architectural conclusion is therefore:

```text
Vidya
= Educational Brain

Qwen / Scene Compiler
= Visual Specification Layer

Domain Engines
= Scientific Authority

Renderer
= Visual Execution

Niera Knowledge Graph
= Student + Curriculum Context
```

The Vidya 4B experiments validate the direction.

The next decision is whether Vidya 9B provides sufficient improvement to become the preferred educational reasoning model, while maintaining acceptable system-level latency and cost.