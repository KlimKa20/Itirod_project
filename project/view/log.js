const log =
    `<link rel="stylesheet" type="text/css" href="styles/reg.css"/>
        <section class="authentication-container">
        <div class="landscape-container">
            <img class="landscape__image" src="image/2644029898.jpg" alt="Фото пикника">
        </div>
        <div class="identification-container">
            <div class="identification__text_header">
                <h2>
                    <span>LogIn</span>
                    |
                    <a href="/reg" onclick="onNextPage('/reg');return false;">Join</a>
                </h2>
            </div>
            <form class="identification__form" onsubmit="authObject.submitSigIn();return false;">
                <input id="login" type="text" placeholder="Type your email" required>
                <input id="password"  type="password" placeholder="Type your password" required>
                <button type="submit">Login</button>
            </form>
            <div class="other_enter__container">
                <button type="button" class="other_enter__item button_google" onclick="authObject.SigInWithGoogle();return false;">Continue with Google</button>
                <button type="button" class="other_enter__item button_facebook" onclick="authObject.SigInWithFacebook();return false;">Continue with Facebook</button>
            </div>
            <div class="identification__text_footer">
                <span>Don't have a profile?</span>
                <a href="/reg" onclick="onNextPage('/reg');return false;">Join</a>
            </div>
        </div>
    </section>
    `