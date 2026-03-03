# Consultant Copilot Wallpaper

A professional interactive dashboard designed as a live wallpaper for consultants. Combines Business Central, Power Apps, Power Automate, and Power BI cheat-sheets with an offline AI consultant assistant.

## Features

- **Professional Dark Theme**: Microsoft-style design optimized for readability
- **Interactive Cheat-Sheets**: 
  - Business Central / AL code examples
  - Power Apps formulas and patterns
  - Power Automate workflows and expressions
  - Power BI DAX measures and best practices
  - Consultant project management tips
- **Offline AI Assistant**: "Ask Copilot" feature that simulates expert guidance
- **Lightweight Performance**: No external libraries, optimized for continuous display
- **Fully Responsive**: Works on desktop, tablet, and mobile screens
- **Live Wallpaper Ready**: Compatible with Lively Wallpaper application

## Project Structure

```
consultant-copilot-wallpaper/
├── index.html          # Main HTML structure
├── style.css           # Professional styling (dark theme)
├── app.js              # Interactive logic and content
├── README.md           # This file
└── assests/
    └── logos/
        ├── business-central-logo-.png
        ├── Logo Power Bi.png
        ├── logp power apps.png
        ├── microsoft-power-automate-2020.png
        ├── Power Platform.png
        ├── Power Platform1.png
        └── Talan_Logo.png
```

## Quick Start

### Open in Browser

1. Navigate to the project folder
2. Double-click `index.html` or open it with your browser
3. The dashboard will load with Business Central cheat-sheets by default

### How to Use

#### Navigation
- Click section buttons in the left sidebar to switch between topics:
  - **Business Central (AL)** - AL code patterns, table structure, event handling
  - **Power Apps** - Power Fx formulas, data operations, validation patterns
  - **Power Automate** - HTTP requests, expressions, SharePoint integration, workflows
  - **Power BI** - DAX formulas, data modeling, visualizations, best practices
  - **Consultant Tips** - Project management, requirements, testing, go-live guidance

#### Ask Copilot Feature
1. Click the **"Ask Copilot"** section at the bottom of the main panel
2. Enter your question (e.g., "How do I create a table in AL?")
3. Click **"Get Guidance"** or press Ctrl+Enter
4. Receive contextual responses based on your current section

## Using with Lively Wallpaper

### Installation Steps

1. **Download Lively Wallpaper**
   - Get it from Microsoft Store or [livelywallpaper.net](https://livelywallpaper.net)
   - Install and launch the application

2. **Add HTML Wallpaper**
   - Open Lively Wallpaper settings
   - Click "Add wallpaper" → "Local file"
   - Navigate to `index.html` in this project folder
   - Select "HTML" as the wallpaper type
   - Click "Open"

3. **Configure Wallpaper**
   - Adjust performance settings if needed (usually "Balanced" works well)
   - Test on your target monitor
   - Lively will automatically refresh when changes are made

### Performance Tips for Wallpaper Mode

- The application is optimized for low CPU usage
- No external API calls are made (fully offline)
- Copilot responses are simulated locally
- Resize is handled gracefully across monitor changes
- The sidebar automatically adapts to smaller screens

## Customization

### Adding New Logos

1. Place logo files in `assests/logos/` folder
2. Update the `<img>` tags in `index.html` header section:
   ```html
   <img src="assests/logos/your-logo.png" alt="Logo Name" class="logo">
   ```

### Customizing Cheat-Sheet Content

All content is defined in `app.js` in the `contentDatabase` object:

```javascript
'section-name': {
    title: 'Display Title',
    sections: [
        {
            category: 'Category Name',
            content: 'HTML content here'
        }
    ]
}
```

#### Content Types

**Code Blocks**:
```html
<div class="code-block">
    <span class="keyword">code</span>
    <span class="comment">// comments</span>
</div>
```

**Formula Notes**:
```html
<div class="formula-note"><strong>Label:</strong> Formula or explanation</div>
```

**Lists**:
```html
<ul class="list-item">Item 1</ul>
<ul class="list-item">Item 2</ul>
```

### Styling Colors

Core colors in `style.css`:
- `--primary-bg: #1e1e1e` - Main background
- `--secondary-bg: #252526` - Secondary background
- `--accent: #0078d4` - Microsoft blue (accent color)
- `--text-primary: #e0e0e0` - Main text
- `--text-secondary: #a0a0a0` - Secondary text
- `--success: #107c10` - Success/green
- `--warning: #ffb900` - Warning/amber
- `--error: #f85149` - Error/red

Modify these values in `:root` selector to change the theme.

## Content Quality Assurance

### Business Central (AL)
- All code examples are valid AL syntax
- Follows Microsoft standards and naming conventions
- Includes real-world patterns used in client projects

### Power Apps
- All formulas use Power Fx syntax
- Examples are testable in Power Apps Studio
- Covers common real-world scenarios

### Power Automate
- Expressions are valid for Automation flows
- Follows Microsoft documentation patterns
- Includes error handling and best practices

### Power BI
- DAX formulas are syntactically correct
- Follows performance optimization guidelines
- Includes common business intelligence patterns

### Consultant Tips
- Based on industry best practices
- Covers full project lifecycle
- Practical, actionable advice

## Browser Compatibility

- Chrome/Chromium (recommended for wallpaper)
- Firefox
- Edge
- Safari

## System Requirements

- **Processor**: Any modern CPU (minimal load)
- **Memory**: < 50 MB
- **Display**: Works at any resolution (responsive design)
- **Network**: Not required (fully offline)
- **Disk Space**: < 5 MB with logos

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Enter (Cmd+Enter on Mac) | Submit Copilot question |
| Click sidebar buttons | Navigate sections |
| Click "Ask Copilot" | Toggle input panel |

## Troubleshooting

### Logos not showing
- Verify logo files exist in `assests/logos/` folder
- Check file names match exactly (case-sensitive on Mac/Linux)
- Ensure paths start with `assests/logos/`

### Slow performance as wallpaper
- Close other CPU-intensive applications
- Reduce monitor refresh rate slightly in Lively settings
- Disable background animations in Windows if needed

### Content not updating
- Clear browser cache (F5 to refresh)
- Close and reopen Lively Wallpaper
- Ensure index.html is in the correct location

## Content Updates

To add new cheat-sheets or update existing ones:

1. Edit `app.js`
2. Modify the `contentDatabase` object
3. Add or update sections following the existing structure
4. Save the file
5. Refresh the browser (F5) to see changes
6. Lively Wallpaper will automatically reload

## Tips for Best Results

1. **Large Monitor**: This dashboard really shines on a 27"+ monitor with high resolution
2. **Dual Monitor**: Run on secondary monitor for quick reference while working
3. **Performance**: Leave running during work day—uses minimal resources
4. **Customization**: Update cheat-sheets with client-specific processes and patterns
5. **Accessibility**: Text is readable at typical viewing distances (3+ feet from screen)

## Known Limitations

- Internet connection not required (feature, not limitation)
- Copilot responses are simulated (not connected to real AI)
- No persistence of user notes (refresh resets state)
- Limited to sections implemented in contentDatabase

## Future Enhancements

Potential additions:
- Local note-taking feature
- Custom section creation
- Dark/light theme toggle
- Favorite cheat-sheets
- Search functionality
- Integration with VS Code for code snippet insertion
- Customizable hotkeys

## Support & Contributing

For issues, questions, or content suggestions:
1. Review the cheat-sheets for existing answers
2. Check your section knowledge base
3. Test in a clean browser environment

## License

This project is configured for internal consultant use at Talan.

## Created

Built as a professional tool for consultants specializing in:
- Microsoft Business Central
- Power Platform (Apps, Automate, BI)
- AL programming
- Business process consulting

---

**Version**: 1.0  
**Last Updated**: March 2026  
**Status**: Production Ready
