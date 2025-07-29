
# 🌆 CityWise App – React Native Frontend

This repository represents the **CityWise** mobile & web application developed in **React Native (Expo)**. The goal is to create a city services exploration platform with a clean, consistent, and responsive user interface, as outlined in the attached UI screenshot document.

> **Note:** The backend is not yet available. All API calls must be mocked with static data and abstracted into service layers for easy replacement later.

---

## 📦 Project Objective

- Recreate the UI shown in the design screenshots.
- Apply uniform CSS and theming across all pages.
- Use modular, maintainable, and scalable React Native architecture.
- Prepare the frontend to easily integrate with backend services in the future.

---

## 📲 Target Platforms

- **Mobile (iOS & Android)** — via Expo
- **Web** — using React Native Web

---

## 📁 Directory Structure

```
CityWiseApp/
├── assets/              # Images, logos
├── components/          # Reusable UI components
├── constants/           # Colors, fonts, spacing
├── screens/             # Home, Services, Category detail screens
├── services/            # API abstraction layer (currently mocks)
├── navigation/          # React Navigation setup
├── utils/               # Helpers and formatters
├── App.tsx              # App root
└── README.md
```

---

## 🌐 Navigation Flow

- Navigation should be handled using **React Navigation** (Stack Navigator).
- All screens must follow this basic navigation hierarchy:

```
HomeScreen
  └── ServicesScreen
        └── CategoryDetailScreen
```

- Include a **back navigation button** on Services and Category Detail screens.
- Use **navigation params** to pass selected categories/data.

---

## 🧑‍🎨 UI Screens (Based on Document)

### 1. Home Screen
- Banner or header image.
- Cards/tiles showing top-level services (e.g., "Consulting", "Legal", etc.).

### 2. Services Screen
- Grid or vertical list of service categories.
- Each item must be visually uniform, clickable, and padded.

### 3. Category Detail Screen
- List of service providers under the selected category.
- Show provider name, logo/image, location, contact button, ratings.

---

## 🎨 Design System & CSS Guidelines

### 🔹 Color Palette

| Name              | Hex        |
|-------------------|------------|
| Primary           | `#21375B`  |
| Secondary         | `#A3C2E4`  |
| Accent            | `#008CBA`  |
| Background        | `#F5F7FA`  |
| Text Primary      | `#000000`  |
| Text Secondary    | `#555555`  |

### 🔸 Fonts

- **Base Font**: System default (San Francisco for iOS, Roboto for Android)
- **Weights**: Use `600` for headings and `400` for body text
- **Sizes**:
  - Title: 24px
  - Subtitle: 18px
  - Body: 14px
  - Caption: 12px

### 🔹 Spacing & Layout

- **Screen Padding**: 16–24px
- **Component Spacing**: Use consistent `gap`/`margin` around UI blocks
- **Card Padding**: 12–16px
- Use responsive percentage widths where applicable.

### 🔸 Components (Code Sample)

#### Service Card

```tsx
<View className="bg-white rounded-xl shadow-md p-4 mb-4">
  <Text className="text-xl font-semibold text-[#21375B]">Title</Text>
  <Text className="text-sm text-[#555555]">Description</Text>
</View>
```

#### Category Tile

```tsx
<TouchableOpacity className="bg-[#A3C2E4] p-4 rounded-lg flex items-center justify-center m-2 w-[45%]">
  <Image source={...} className="w-12 h-12 mb-2" />
  <Text className="text-[#21375B] font-medium text-sm text-center">Consulting</Text>
</TouchableOpacity>
```

> ✅ **Tip:** Use a `ThemeProvider` or shared `theme.ts` constants file to manage all colors, font sizes, spacing, etc.

---

## 🧪 Mocking API Data (No Backend Yet)

- Create a `services/` folder and export mock data as JSON or JS objects.
- Use `axios-mock-adapter`, or simply use `Promise.resolve()` to simulate async calls.

#### Example Mock

```ts
export const getServices = () =>
  Promise.resolve([
    {
      id: 1,
      name: "Expert Financial Services",
      location: "Connaught Place, Delhi",
      image: "https://example.com/logo.png",
    },
    {
      id: 2,
      name: "Budget Advisors",
      location: "Bandra, Mumbai",
      image: "https://example.com/logo2.png",
    },
  ]);
```

- Use `useEffect` to simulate loading.
- Keep the structure API-ready so the mock can be replaced with real API later.

---

## ✅ Best Coding Practices (React Native)

1. **Use Functional Components & Hooks**  
   - Prefer `useEffect`, `useState`, `useContext`
   - Avoid class-based components

2. **Follow Atomic Component Design**  
   - Keep UI components reusable (`Button`, `Card`, `Tile`, etc.)

3. **Centralize Theme and Styles**  
   - Define colors, spacing, and fonts in one place
   - Avoid inline styles; use Tailwind (NativeWind) or Styled Components

4. **Use ESLint + Prettier**  
   - Ensure code consistency across files

5. **Maintain Modular Folder Structure**  
   - Keep business logic, components, and services isolated

6. **Accessibility First**  
   - Use `accessibilityLabel`, proper touchable sizes

7. **Performance Optimization**  
   - Use `FlatList` over `ScrollView` for lists
   - Avoid unnecessary re-renders (memoize where needed)

---

## 🔋 Future Improvements

- Connect real backend APIs once ready
- Add authentication & profile pages
- Implement dynamic search/filter
- Enable location-based results

---

## 👨‍💻 Contributors & AI Collaboration

This project is being developed with the help of AI-guided coding agents and frontend engineers to ensure scalability, design consistency, and fast delivery.

---
