const {Builder, By, Key} = require("selenium-webdriver")

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://class.devsamurai.com.br/auth/login")

        // Login
        const emailInput = await driver.findElement(By.id("student_email"))
        const passwordInput = await driver.findElement(By.id("student_password"))
        const buttonLogin = await driver.findElement(By.className("button"))
        await emailInput.sendKeys("a")
        await passwordInput.sendKeys("b")
        await buttonLogin.click()
        
        // Navegação
        const item1 = await driver.findElement(By.xpath("//a[@href='/resources/151']"))
        await item1.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        await driver.navigate().back()
        const item2 = await driver.findElement(By.xpath("//a[@href='/resources/317']"))
        await item2.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        await driver.navigate().back()

        // Pesquisa
        const searchInput = await driver.findElement(By.id("q_title_cont"))
        await searchInput.sendKeys("Javascript")
        await searchInput.sendKeys(Key.ENTER)
        const javascriptItem = await driver.findElement(By.xpath("//a[@href='/resources/168']"))
        await javascriptItem.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        const homeButton = await driver.findElement(By.xpath("//a[@href='/']"))
        await homeButton.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        //Inscrever-se na aula
        const classButton = await driver.findElement(By.xpath("//a[@href='/resources/180']"))
        await classButton.sendKeys(Key.ENTER)
        await driver.sleep(5000)
        const subscribeButton = await driver.findElements(By.className("button"))
        await subscribeButton[0].click()
        await driver.sleep(5000)

        //Concluir aula
        const concludeClass = await driver.findElement(By.className("button"))
        await concludeClass.sendKeys(Key.ENTER)
        
    } catch (e) {
        console.log(e)
    }
}

openSite()