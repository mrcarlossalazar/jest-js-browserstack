const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");

describe("BStack demo test", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test(
    "add iPhone11 to cart",
    async () => {
      await driver.get("https://bstackdemo.com/");
      await driver.wait(until.titleMatches(/StackDemo/i), 10000);

      // locating product on webpage and getting name of the product
      await driver.wait(until.elementLocated(By.xpath('//*[@id="5"]/p')));
      let productText = await driver
        .findElement(By.xpath('//*[@id="5"]/p'))
        .getText();
      console.log(productText);

      // clicking the 'Add to cart' button
      await driver.findElement(By.xpath('//*[@id="5"]/div[4]')).click();

      // waiting until the Cart pane has been displayed on the webpage
      await driver.wait(until.elementLocated(By.className("float-cart__content")));
      await driver.findElement(By.className("float-cart__content"));

      // Shopping Cart Item structure from https://bstackdemo.com/
      //<div class="shelf-item">
      //  <div class= "shelf-item__del" ></div >
      //    <div class="shelf-item__thumb">
      //        <img style="height: 100%;" src="/_next/static/images/iPhone11-device-info-271b6e122eab30028885b99ddf1897f2.png" alt="iPhone 11"></div>
      //        <div class="shelf-item__details"><p class="title">iPhone 11</p><p class="desc">Apple <br>Quantity: 1</p></div>
      //        <div class="shelf-item__price"><p>$  599.00</p><div>
      //        <button disabled="" class="change-product-button">-</button>
      //        <button class="change-product-button">+</button></div></div>
      //    <div class="clearfix"></div>
      //</div >
      // locating product in cart and getting name of the product in cart

      let productCartText = await driver
        .findElement(
          By.xpath(
            '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]' //path to <p class="title">iPhone 11</p>
          )
        )
        .getText();

      await driver.findElement(By.className('buy-btn')).click();

      await driver.wait(until.elementLocated(By.css('#username')));
      // Wait for the page to load and the dropdown to be interactable
      let dropdownControl = await driver.wait(until.elementLocated(By.css('.css-yk16xz-control')), 10000);
      await dropdownControl.click();

      // Wait for the dropdown options to be visible
      await driver.wait(until.elementLocated(By.css('.css-26l3qy-menu')), 10000);

      // Locate the desired option by its text and click it
      let option = await driver.findElement(By.xpath("//div[contains(@class, 'css-26l3qy-menu')]//div[contains(text(), 'fav_user')]"));
      await option.click();

      await driver.wait(until.elementLocated(By.css('#password')));

      // Wait for the page to load and the dropdown to be interactable
      let dropdownControl2 = await driver.wait(until.elementLocated(By.css('.css-yk16xz-control')), 10000);
      await dropdownControl2.click();

      // Wait for the dropdown options to be visible
      await driver.wait(until.elementLocated(By.css('.css-26l3qy-menu')), 10000);

      // Locate the desired option by its text and click it
      let option2 = await driver.findElement(By.xpath("//div[contains(@class, 'css-26l3qy-menu')]//div[contains(text(), 'testingisfun99')]"));
      await option2.click();

      let signInButton = await driver.findElement(By.id('login-btn'));
      await signInButton.click();

      // Wait for the sign-in process to complete (e.g., wait for a certain element to appear)
      await driver.wait(until.elementLocated(By.id('firstNameInput')), 10000)

      await driver
        .findElement(By.id("firstNameInput"))
        .sendKeys("Carlos");
      await driver
        .findElement(By.id("lastNameInput"))
        .sendKeys("Salazar");
      await driver
        .findElement(By.id("addressLine1Input"))
        .sendKeys("123 Main Street");
      await driver
        .findElement(By.id("provinceInput"))
        .sendKeys("NY");
      await driver
        .findElement(By.id("postCodeInput"))
        .sendKeys("10001");
      await driver.findElement(By.id('checkout-shipping-continue')).click();

      await driver.wait(until.titleMatches(/StackDemo/i), 10000);

      await driver.wait(until.elementLocated(By.id('confirmation-message')), 10000)

      let confirmation_message = await driver
        .findElement(
          By.id(
            'confirmation-message'
          )
        )
        .getText();
      expect(confirmation_message).toBe('Your Order has been successfully placed.');
      
    },
    10000000
  );
});
