const aiProjects = [
  {
    title: "Agentic AI System for Dental Clinic Automation",
    subtitle: "Healthcare automation · Agentic AI · Workflow automation",
    chip: "LangChain · LangGraph · OpenAI",
    image: "assets/projects/01-dental-clinic-automation.png",
    alt: "Agentic AI System for Dental Clinic Automation project slide"
  },
  {
    title: "LLM-based PDF & Image Chatbot",
    subtitle: "RAG assistant · Multimodal QA · Document intelligence",
    chip: "RAG · OpenAI · Vector Search",
    image: "assets/projects/02-pdf-image-chatbot.png",
    alt: "LLM-based PDF and Image Chatbot project slide"
  },
  {
    title: "Smart Calendar Agent with Email Triage",
    subtitle: "Inbox prioritization · Scheduling agent · Productivity AI",
    chip: "Email AI · Calendar Agent · Automation",
    image: "assets/projects/03-smart-calendar-agent.png",
    alt: "Smart Calendar Agent with Email Triage project slide"
  },
  {
    title: "Voice Agent with Audio Classification",
    subtitle: "Voice AI · Transcription · Audio understanding",
    chip: "Speech · Audio ML · AI Assistant",
    image: "assets/projects/04-voice-agent-audio-classification.png",
    alt: "Voice Agent with Audio Classification project slide"
  },
  {
    title: "Automated Research Agent for Literature Review",
    subtitle: "Research automation · Note extraction · Summarization",
    chip: "Research AI · LLM · Knowledge Extraction",
    image: "assets/projects/05-research-agent-literature-review.png",
    alt: "Automated Research Agent for Literature Review project slide"
  },
  {
    title: "AI-based CCTV Surveillance for Intrusion Detection",
    subtitle: "Security AI · CCTV monitoring · Real-time alerts",
    chip: "Computer Vision · CCTV AI · Deep Learning",
    image: "assets/projects/06-cctv-intrusion-detection.png",
    alt: "AI-based CCTV Surveillance for Intrusion Detection project slide"
  },
  {
    title: "Lane and Vehicle Detection with Real-time Alerts",
    subtitle: "Traffic AI · Vehicle detection · Live monitoring",
    chip: "YOLO · Traffic AI · Computer Vision",
    image: "assets/projects/07-lane-vehicle-detection.png",
    alt: "Lane and Vehicle Detection with Real-time Alerts project slide"
  },
  {
    title: "Crack Measurement using UNET",
    subtitle: "Segmentation · Structural inspection · Deep learning",
    chip: "UNET · Segmentation · Inspection AI",
    image: "assets/projects/08-crack-measurement-unet.png",
    alt: "Crack Measurement using UNET project slide"
  }
];

(function initAIProjectSlider() {
  const root = document.querySelector("[data-ai-slider]");
  if (!root) return;

  const image = root.querySelector("[data-ai-main-image]");
  const title = root.querySelector("[data-ai-title]");
  const subtitle = root.querySelector("[data-ai-subtitle]");
  const chip = root.querySelector("[data-ai-chip]");
  const current = root.querySelector("[data-ai-current]");
  const prev = root.querySelector("[data-ai-prev]");
  const next = root.querySelector("[data-ai-next]");
  const thumbs = Array.from(document.querySelectorAll("[data-ai-thumbs] .ai-thumb"));

  let index = 0;

  function render(nextIndex) {
    index = (nextIndex + aiProjects.length) % aiProjects.length;
    const project = aiProjects[index];

    image.src = project.image;
    image.alt = project.alt;
    title.textContent = project.title;
    subtitle.textContent = project.subtitle;
    chip.textContent = project.chip;
    current.textContent = String(index + 1).padStart(2, "0");

    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("is-active", thumbIndex === index);
    });
  }

  prev.addEventListener("click", () => render(index - 1));
  next.addEventListener("click", () => render(index + 1));
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => render(Number(thumb.dataset.index)));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") render(index - 1);
    if (event.key === "ArrowRight") render(index + 1);
  });
})();
