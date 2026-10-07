import { test, expect } from '@playwright/test';

test('log in to the SmartBear Web Orders application', async ({ page }) => {
	await page.goto(
		'http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx'
	);

	await page.locator('#ctl00_MainContent_username').fill('Tester');
	await page.locator('#ctl00_MainContent_password').fill('test');
	await page.locator('#ctl00_MainContent_login_button').click();

	await expect(page).toHaveURL(/Default\.aspx/i);
});
