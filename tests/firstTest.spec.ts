import {expect, test} from '@playwright/test';
import exp from 'constants';



test('the first test', async ({page}) => {
await page.goto('http://localhost:4200/pages/forms/layouts')
})

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Reusing the locators', async({page}) => {
    
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
    const emailField = basicForm.getByRole('textbox', {name: "Email"});

    await emailField.fill('test@test.com');
    await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click();

    await expect(emailField).toHaveValue('test@test.com');
})

test('Extracting values', async({page}) => {
    //single test value
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
    const buttonText = await basicForm.locator('button').textContent();
    expect(buttonText).toEqual('Submit');

    //all text value
    const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents();
    expect(allRadioButtonsLabels).toContain("Option 1");


    //input value
    const emailField = basicForm.getByRole('textbox', {name: "Email"});
    await emailField.fill('test@test.com');
    const emailValue = await emailField.inputValue();
    expect(emailValue).toEqual('test@test.com');

    const placeholderValue = await emailField.getAttribute('placeholder');
    expect(placeholderValue).toEqual('Email');
})

test('assertions', async({page}) => {
    const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button');
    // General assertions
    const value = 5;
    expect(value).toEqual(5);

    const text = await basicFormButton.textContent();
    expect(text).toEqual("Submit");

    // Locator assertion
    await expect(basicFormButton).toHaveText('Submit');

    //Soft assertion
    await expect.soft(basicFormButton).toHaveText('Submit5');
    await basicFormButton.click();
})