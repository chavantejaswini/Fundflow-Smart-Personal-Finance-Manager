
# FundFlow - PWA Application

## Project Overview

**FundFlow** is a Progressive Web Application (PWA) designed to help users track their finances with ease and security. It enables users to manage income sources, track expenses, set budgets, and achieve financial goals while maintaining high security and privacy standards. This project demonstrates full-stack development skills using React, Node.js, MongoDB, and Redux, while adhering to RESTful and Domain-Driven Design (DDD) principles.

## Team Members

| Name               | Email                   |
|--------------------|-------------------------|
| Soham Chavan       | [chavan.soha@northeastern.edu](mailto:chavan.soha@northeastern.edu) |
| Sumeet Rane        | [rane.su@northeastern.edu](mailto:rane.su@northeastern.edu) |
| Tejaswini Chavan   | [chavan.t@northeastern.edu](mailto:chavan.t@northeastern.edu) |
| Prapti Sanghavi    | [sanghavi.pr@northeastern.edu](mailto:sanghavi.pr@northeastern.edu) |

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Presentation Resources](#presentation-resources)
- [Team Members](#team-members)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### 1. User Authentication and Security
- **User Registration and Login**: Secure user registration and login to protect account information.
- **Two-Factor Authentication (2FA)**: Optional 2FA for enhanced account security, allowing users to verify identity via email or phone.
- **Data Encryption**: Sensitive user data, including financial records, is encrypted to ensure data privacy and security.

### 2. Income and Expense Tracking
- **Add Income Sources**: Users can log multiple income sources such as salaries, freelance work, or passive income.
- **Expense Categorization**: Predefined categories (food, rent, entertainment) and custom categories provide flexibility in organizing expenses.
- **Expense Notes and Tags**: Users can add notes or tags to each expense for easier search and tracking.

### 3. Budgeting and Goal Setting
- **Monthly/Weekly Budget Setup**: Users can define a budget plan for each month or week to control spending.
- **Goal Setting**: Enables users to set and track specific financial goals (e.g., "Save $1,000 in 3 months").
- **Budget Alerts**: Customizable alerts notify users when they approach or exceed budget limits.

### 4. Financial Insights and Reports
- **Monthly and Yearly Reports**: Detailed visual reports (charts and graphs) provide insights into spending, income, and savings trends over time.
- **Context Menu**: Interactive right-click context menu with quick options for managing entries and categories.

### 5. Investment Tracking and Analysis
- **Portfolio Management**: Track stocks, mutual funds, crypto, and other investments.
- **Real-Time Market Data**: API integration for up-to-date pricing.
- **Portfolio Analysis**: Visual indicators of portfolio performance over time.
- **Investment Strategy Comparison**: Simulate conservative vs. aggressive strategies.

### 6. Future Scope Features
- **Bill Reminders and Payment Tracking**: Alerts for upcoming and overdue payments.
- **Data Visualization**: Interactive dashboards showcasing financial data trends.
- **Data Import/Export**: Export data to CSV for backup or further analysis.
- **Cloud Backup**: Automatic backup to cloud storage for data protection.

## Technology Stack

- **Frontend**: React, Redux, SCSS, React Router, Service Workers (for PWA features)
- **Backend**: Node.js, Express.js, MongoDB
- **APIs**: External financial data APIs for real-time insights
- **Security**: JWT for authentication, bcrypt for password hashing, and AES encryption for sensitive data
- **Documentation**: JSDoc for code documentation

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://classroom.github.com/a/DIHvCS29
   cd SmartPersonalFinanceManager

2. **Install Backend Dependencies**
    Navigate to the `backend` directory and install the necessary dependencies:

    ```bash
    cd backend
    npm install

3. **Install Frontend Dependencies**
    Navigate to the `frontend` directory and install the necessary dependencies:

    ```bash
    cd ../frontend
    npm install

4. **Set up Environment Variables**
    Create a `.env` file in both the `backend` and `frontend` directories. Add the necessary environment variables as needed for the application. Below is an example configuration:

    #### Backend `.env` file example:
    ```plaintext
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000

5. **Run the Application**
    Once all dependencies are installed and environment variables are set up, you can start both the backend and frontend servers.

    # Start backend
    cd backend
    npm start

    # Start frontend
    cd ../frontend
    npm start


## Object Model For Domain Driven

```mermaid
---
title: Expense Tracking Domain Model
---

classDiagram

    %% Core Entities %%
    class User {
        +String userId
        +String email
        +String passwordHash
        +Boolean has2FAEnabled
        +String phoneNumber
        +String socialLoginId
    }

    class Income {
        +String incomeId
        +String source
        +Double amount
        +Date dateReceived
        +Boolean isRecurring
        +String notes
    }

    class Expense {
        +String expenseId
        +String category
        +Double amount
        +Date dateIncurred
        +Boolean isRecurring
        +String notes
        +String tags
    }

    class Budget {
        +String budgetId
        +Double monthlyLimit
        +Double weeklyLimit
        +Double categoryLimit
        +Date startDate
        +Date endDate
    }

    class Goal {
        +String goalId
        +String description
        +Double targetAmount
        +Date targetDate
        +Double progress
    }

    %% Insights and Analytics %%
    class SpendingInsight {
        +String insightId
        +String category
        +Double monthlyAverage
        +Double yearlyAverage
    }

    class FinancialReport {
        +String reportId
        +Date reportDate
        +Double totalIncome
        +Double totalExpenses
        +Map categoryBreakdown
    }

    class Bill {
        +String billId
        +String payee
        +Double amount
        +Date dueDate
        +Boolean isPaid
        +String paymentMethod
    }

    class Portfolio {
        +String portfolioId
        +String assetType
        +Double amountInvested
        +Double currentValue
        +Date lastUpdated
    }

    class Recommendation {
        +String recommendationId
        +String type
        +String description
        +Double riskLevel
    }

    %% Associations %%
    User "1" *-- "0..*" Income
    User "1" *-- "0..*" Expense
    User "1" *-- "0..*" Budget
    User "1" *-- "0..*" Goal
    User "1" *-- "0..*" SpendingInsight
    User "1" *-- "0..*" FinancialReport
    User "1" *-- "0..*" Bill
    User "1" *-- "0..*" Portfolio
    User "1" *-- "0..*" Recommendation

    %% Relationships %%
    Income "0..*" --* Expense : isRelatedTo
    Budget "1" --* Goal : tracks
    SpendingInsight "1" --* FinancialReport : providesDataFor
    FinancialReport "1" --* Recommendation : generates
    Bill "0..*" --* FinancialReport : contributesTo
    Portfolio "1" --* Recommendation : suggestsInvestments

    %% Enumeration for Recommendation Types %%
    class RecommendationType {
        <<enumeration>>
        SPENDING_ADVICE
        SAVINGS_TIPS
        INVESTMENT_ADVICE
    }
    
    Recommendation *-- RecommendationType



