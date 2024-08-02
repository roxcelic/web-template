export function popup() {
  if (!document.getElementById('popup')) {
      const popupHtml = `
          <div id="popup" style="
              display: flex;
              align-items: center;
              justify-content: center;
              position: fixed;
              z-index: 1000;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
          ">
              <div style="
                  background-color: red;
                  padding: 20px;
                  border: 1px solid #888;
                  width: 80%;
                  max-width: 400px;
                  position: relative;
                  border-radius: 12px;
              ">
                  <p>
                      HEY<br>
                      Welcome to my website, this popup will only appear
                      when you press 'z' or if it's your first time visiting my website.<br><br>
                      The controls for this site are as follows:<br>
                      <t><code>z</code>: spawns the welcome popup<br>
                      <t><code>x</code>: closes the welcome popup<br>
                      <t><code>c</code>: follows the link that is on the content currently 'playing' if there is one<br>
                      <t><code>Up_arrow</code>: unselects the 'cassette'<br>
                      <t><code>Left_arrow</code>: moves the content left<br>
                      <t><code>Down_arrow</code>: selects the 'cassette'<br>
                      <t><code>Right_arrow</code>: moves the content right<br><br>
                      Remember each cassette has multiple 'tracks' so when you select one you can move left and right within it<br><br>
                      To close this popup press 'x' or click anywhere on the page that isn't the popup.
                  </p>
              </div>
          </div>
      `;
      document.body.insertAdjacentHTML('beforeend', popupHtml);
      localStorage.setItem('popupShown', 'true');
      const popup = document.getElementById('popup');
      window.addEventListener('click', function(event) { 
          if (event.target === popup) {
              popup.remove();
          }
      });
  }
}
