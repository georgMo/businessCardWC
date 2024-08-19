const template = document.createElement('template');
template.innerHTML =`

<style>

div{
  display: inline-block;
  flex-direction: row;
}

button {
  background-color: lightblue;
  border-radius: 8px;
  border-style: none;
  color: #FFFFFF;
  cursor: pointer;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 10px 16px;
  
}

button:hover {
  transform: scale(1.05);
}
</style>

<div>
<button>@ contact</button>
</div>
` ;

class CustomButton extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      let clone = template.content.cloneNode(true);
      shadowRoot.append(clone);
    }
  }
   customElements.define('custom-button', CustomButton);