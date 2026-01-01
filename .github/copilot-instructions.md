# Copilot Instructions for AngularCV

## Project Overview

AngularCV is a self-hosted online CV/resume website built with Angular. It provides a simple, customizable platform for creating a personal professional website outside of LinkedIn, Xing, or similar services.

## Technology Stack

- **Framework**: Angular 20.x with Angular Material Design components
- **Language**: TypeScript 5.9.x
- **Build Tool**: Angular CLI
- **Testing**: Karma + Jasmine for unit tests, Protractor for e2e tests
- **Linting**: ESLint with Angular-specific rules
- **Package Manager**: Yarn (uses yarn.lock)

## Project Structure

```
src/
├── app/
│   ├── about/              # About section component
│   ├── contact/            # Contact page component
│   ├── cv-item/            # Core CV item component and data
│   │   └── data/           # CV content data files (*.data.*.ts)
│   ├── education/          # Education section component
│   ├── experience/         # Work experience section component
│   ├── feature-toggle/     # Feature toggle configuration
│   ├── footer/             # Footer component
│   ├── header/             # Header component
│   ├── l10n/               # Localization/i18n data and services
│   ├── overview/           # Overview/landing page component
│   ├── projects/           # Projects section component
│   ├── publications/       # Publications section component
│   ├── volunteering/       # Volunteering section component
│   └── print/              # Print functionality components
├── assets/
│   ├── img/                # Images including avatar, cover, thumbnails
│   └── attachments/        # PDF attachments
└── environments/           # Environment configurations
```

## Build, Test, and Lint Commands

- **Development server**: `ng serve` or `npm start` (runs on http://localhost:4200/)
- **Build**: `ng build` or `npm run build` (outputs to `dist/` directory)
- **Production build**: `ng build --configuration production`
- **Unit tests**: `ng test` or `npm test`
- **E2E tests**: `ng e2e` or `npm run e2e`
- **Linting**: `ng lint` or `npm run lint`

## Code Style and Conventions

### TypeScript/Angular Conventions

1. **Component Selectors**: Use `app-` prefix with kebab-case (e.g., `app-cv-item`)
2. **Directive Selectors**: Use `app` prefix with camelCase (e.g., `appCvItem`)
3. **File Naming**: Use kebab-case for files (e.g., `cv-item.component.ts`)
4. **Class Naming**: Use PascalCase for classes (e.g., `CvItemComponent`)
5. **Service Injection**: Use private/public modifiers in constructors for dependency injection
6. **Standalone Components**: Set `standalone: false` in component decorators (this project uses NgModules)

### Code Organization

- All components follow Angular's standard structure: `.component.ts`, `.component.html`, `.component.css`, `.component.spec.ts`
- Services are suffixed with `.service.ts`
- Data files use the pattern `*.data.ts` or `*.data.[locale].ts` for localized content
- Use TypeScript's access modifiers (`public`, `private`) consistently

## Configuration Guidelines

### CV Content Configuration

CV data is stored in `src/app/cv-item/data/cv-items.data.[locale].ts` files:
- Each language has its own data file (e.g., `cv-items.data.en.ts`, `cv-items.data.de.ts`)
- The main `cv-items.data.ts` exports all language versions
- Content includes: general data, experience, education, publications, projects, volunteering

### Feature Toggles

Feature toggles are configured in `src/app/feature-toggle/feature-toggles.data.ts`:
- `tab_publications`: Show/hide publications tab
- `tab_projects`: Show/hide projects tab
- `tab_volunteering`: Show/hide volunteering tab
- `contact_show_about_section`: Show/hide about section on contact page
- `contact_email_link`: Enable/disable mailto: links
- `contact_email_remove_at_sign`: Replace @ in email display
- `default_language`: Set default language (e.g., 'EN', 'DE')
- `localization`: Enable/disable language switching feature
- `cvitem_show_position_count_badge`: Show position count badge on CV items
- `cvitem_show_position_thumbnail`: Show thumbnails for CV item positions
- `print_view`: Enable/disable browser print functionality

### Localization

Localization data is in `src/app/l10n/l10n.data.ts`:
- Add new languages by creating corresponding data files
- Each language section contains translations for UI elements
- Synchronize with CV data files when adding new languages

## Important Notes

1. **Asset Management**: 
   - Replace `src/assets/img/avatar.jpg` for profile picture
   - Replace `src/assets/img/cover.jpg` for overview page
   - Manage item thumbnails in `src/assets/img/item-thumbnails/`
   - Store attachments in `src/assets/attachments/`

2. **License Compliance**: The "About" section and footer link should remain unchanged to comply with AGPL-3.0 license

3. **ESLint**: Some data files use `/* eslint-disable */` at the top - this is intentional for configuration files

4. **Dependencies**: Use Yarn for package management, not npm directly

5. **Angular Material**: The project uses Angular Material components - follow Material Design guidelines

6. **Progressive Web App**: The project includes service worker configuration (ngsw-config.json)

7. **Sorting**: CV items should be sorted by descending end-date (newest first)

8. **Third-Party Components**: Project uses Material Design Icons and various Google Fonts (Roboto, Roboto Slab)

## Testing Considerations

- Unit tests use Jasmine and are run through Karma
- E2E tests use Protractor
- Test files follow the pattern `*.spec.ts`
- Always write tests for new components and services
- Maintain existing test coverage when modifying code

## Deployment

The project supports multiple deployment targets:
- AWS (see DEPLOYMENT_ON_AWS.md)
- GitHub Pages (see DEPLOYMENT_ON_GITHUB_PAGES.md)
- GitLab Pages (see DEPLOYMENT_ON_GITLAB_PAGES.md)
- Uberspace (see DEPLOYMENT_ON_UBERSPACE.md)
