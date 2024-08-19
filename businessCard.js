
const template = document.createElement('template');
template.innerHTML = `
 <style>
 div{
  
  display:flex;
  flex-direction:column;
  
  border :1px solid gray;
  border-radius:15px;
  box-shadow: 10px 5px 5px gray;
  padding:10px; }
  
   h1 {
    font: italic 28px Times New Roman;
    color:lightblue;
    padding: 10px;
    
    
    }

  ::slotted(h3) {
  
  padding:10px;
  color: peachpuff ;
  
  border: 1px solid gray;
  box-shadow: 5px 2.5px 5px gray;;
  }
  slot[name=fullName]::slotted(*) {
    font:  bold 25px Times New Roman;
    padding:10px;
    margin:10px;
    color:#c3195d;
    box-shadow: 5px 2.5px 5px gray;
    }
    slot[name=email]::slotted(*) {
      margin:10px;
      font: bold 16px Times New Roman;
      color:#ff85a2;
      padding: 10px;
      box-shadow: 5px 2.5px 5px gray;;
      }
      slot[name=mobile]::slotted(*) {
        margin:10px;
        font:  bold 16px Times New Roman;
        color:#ff85a2;
        padding: 10px;
        box-shadow: 5px 2.5px 5px gray;;
        }
        slot[name=contactButton]::slotted(*) {
          
          
          padding: 10px;
         
          }
   
 </style>  
 
<div>
    <h1>Business Card</h1>
    <slot name="fullName"></slot>
    <slot name="mobile"></slot>
    <slot name="email">Standard Text wenn der Slot nicht belegt ist</slot>
    <slot name="contactButton"></slot>
  </div>
`;

class BusinessCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('business-card', BusinessCard);

