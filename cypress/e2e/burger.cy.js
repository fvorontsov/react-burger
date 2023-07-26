import { INGREDIENTS_URL, LOGIN_URL, ORDER_URL } from "./constants";

describe("service is available", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=ingredients-list").as("ingredientList");
  });

  it("Availability", () => {
    cy.get("@ingredientList").should("exist");
  });

  it("Ingredients", () => {
    cy.get("@ingredientList").should("have.length.at.least", 2);
  });
});

describe("ingredient modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=ingredients-list").as("ingredientList");

    cy.get("@ingredientList").eq(0).as("testIngredient");
    cy.get("@testIngredient").eq(0).children("a").eq(0).as("testInner");

    cy.get("@testInner").click();
  });

  it("Opening", () => {
    cy.get("[data-testid=modal]").should("be.visible");
  });

  it("Elements", () => {
    cy.get("[data-testid=ingredientHeader]").should("exist");
    cy.get("[data-testid=ingredientData]").should("exist");
  });

  it("Close button", () => {
    cy.get("[data-testid=close-modal]").should("exist").click();
    cy.get("[data-testid=modal]").should("not.exist");
  });
});

describe("Drag ingredients", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=ingredients-list").as("ingredientList");
  });
  //
  it("Move to bucket", () => {
    const dataTransfer = new DataTransfer();

    cy.get("@ingredientList").eq(1).as("testIngredient");
    cy.get("@testIngredient").eq(0).children("a").eq(0).as("testInner");
    cy.get("@testInner").trigger("dragstart", { dataTransfer });
    cy.get("[data-testid=burgerConstructor]").trigger("drop", { dataTransfer });

    cy.get("[data-testid=constructorElement]").should("exist");
  });
});

describe("Order", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.intercept("GET", INGREDIENTS_URL, { fixture: "ingredients.json" });

    cy.intercept("POST", LOGIN_URL, {
      fixture: "user.json",
    }).as("postLogin");

    cy.get("[data-testid=email-input").type(`test@test.com`);
    cy.get("[type=password]").type(`testtesttest`);

    cy.get("[type=submit]").click();

    cy.wait("@postLogin");

    cy.get("[data-testid=ingredients-list").as("ingredientList");

    const dataTransfer = new DataTransfer();

    cy.get("@ingredientList").eq(0).as("testIngredient");
    cy.get("@testIngredient").eq(0).children("a").eq(0).as("testInner");
    cy.get("@testInner").trigger("dragstart", { dataTransfer });
    cy.get("[data-testid=burgerConstructor]").trigger("drop", { dataTransfer });

    cy.intercept("POST", ORDER_URL, { fixture: "order.json" });
    cy.get("[data-testid=orderButton]").click();
  });

  it("Show modal", () => {
    cy.get("[data-testid=modal]").should("be.visible");
  });

  it("Order number", () => {
    cy.get("[data-testid=orderNumber").should("have.text", "42");
  });

  it("Close", () => {
    cy.get("[data-testid=close-modal]").should("exist").click();
    cy.get("[data-testid=modal]").should("not.exist");
  });
});
