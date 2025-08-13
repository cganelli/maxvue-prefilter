## MaxVue Technical Architecture (Revised)

### Overview
MaxVue enhances on-screen text legibility for presbyopia by applying calibrated prefiltering, color optimization, and luminance guidance. The system uses user-specific optical profiles to adjust rendering in-app and via supported iOS extension points.

### Core Modules
1. **Calibration Engine**
   - Estimates defocus and astigmatism per eye via quick visual tasks.
   - Outputs per-channel point spread functions (PSFs) and viewing parameters.

2. **Prefilter Renderer**
   - Uses Metal-based signed-distance field (SDF) glyph rendering.
   - Applies bounded inverse filtering and safe phase-preserving edge enhancement.
   - Supports per-channel tuning and device-specific subpixel handling.

3. **Green-Mode & Color Presets**
   - Leverages shorter wavelength focus advantage.
   - Presets for monochrome green and green-biased modes.

4. **High-Lux Coach**
   - Guides user to optimal ambient and screen brightness for smaller pupil size.
   - Uses system brightness, white patch test, and optional front camera.

5. **Extension Integration**
   - Safari Web Extension for reading.
   - Share Extension for Mail, Files, PDFs, and images.
   - Photos Editing Extension for image-based text.
   - Shortcuts for quick toggling of color filters and brightness presets.

### System Flow
1. User runs calibration.
2. PSF data stored in local settings model.
3. Renderer applies prefilter and color mode to in-app and extension content.
4. High-Lux Coach prompts user as needed.

### Performance Targets
- 60 Hz rendering on A15+ devices.
- Battery impact < 10% per hour in reading mode.
- Latency < 8 ms per frame on 120 Hz devices.

---

## MaxVue Complete Knowledge Base (Revised)

### Features
- **Personalized Rendering:** Calibration-driven text enhancement.
- **Green-Mode:** Monochrome or green-biased text for improved focus.
- **High-Lux Coach:** Prompts for lighting and brightness optimization.
- **Extension Coverage:** Safari, Share, Photos, and Shortcuts integrations.

### Extension Map (iOS MVP)
1. **Safari Web Extension**
   - Injects renderer into web content.
   - Covers browsing, online reading, and many web apps.
2. **Share Extension**
   - Opens shared documents, PDFs, or web pages in MaxVue.
   - Applies renderer within app context.
3. **Photos Editing Extension**
   - Enhances images with text for reading.
4. **Shortcuts + Accessibility Profiles**
   - Automates switching to green-mode or high brightness.

### Testable Outcomes
- **Visual Acuity Proxy:** Improvement in gap detection (Landolt C) at fixed size.
- **Reading Speed:** +10–20 words per minute (WPM) increase over iOS baseline.
- **User Preference:** ≥70% of participants prefer MaxVue rendering in study conditions.

### What is Deprecated
- Stereoscopic and focal cue features removed from defaults.
- "Complete presbyopia relief" claims removed.
- Performance and memory claims replaced with measured results.

---

## MaxVue PRD (Revised)

### Problem Statement
Presbyopia reduces near focus, making small text on smartphones blurry. Current solutions require external optics. MaxVue seeks to improve legibility via software enhancements within iOS limitations.

### Goals
- Improve measurable reading performance and subjective clarity.
- Provide OS-level coverage where technically possible via extensions.
- Maintain low latency and minimal battery impact.

### Functional Requirements
1. **Calibration**
   - Edge spread match, Landolt C gap detection, astigmatism axis detection.
   - Store per-channel PSF and confidence score.
2. **Rendering**
   - Metal SDF glyph pipeline.
   - Bounded inverse filter with halo suppression.
   - Green-mode and color presets.
3. **Lighting Guidance**
   - Brightness and ambient light prompts.
4. **Extensions**
   - Safari Web Extension.
   - Share Extension.
   - Photos Editing Extension.
   - Shortcuts integration.

### Non-Functional Requirements
- Render at 60 fps for A15+ in reading mode.
- Keep memory and CPU/GPU use within iOS energy budget.
- All data processed locally; no calibration images stored.

### Metrics for Success
- +10–20 WPM over baseline.
- Improved gap detection score.
- ≥70% positive preference in blinded study.

### Risks
- Limited system-wide coverage due to iOS constraints.
- Performance variability on older devices.
- User fatigue during calibration.

### Milestones
- Week 1–2: Metal text pipeline, AI multiplier integration.
- Week 3: Calibration MVP.
- Week 4–5: Green-mode, High-Lux Coach.
- Week 6: Extension prototypes.
- Week 7: Metrics and QA.
- Week 8: Private beta.

