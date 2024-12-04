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