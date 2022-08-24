import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-progress-bar',
  styleUrl: 'pac-progress-bar.scss',
  shadow: true,
})
export class PacProgressBar {

  @Prop()
  value: number = 0;

  @Prop()
  color: Color = "blue";

  @Prop()
  look: "solid" | "compact" = "solid";

  @Prop()
  busy: boolean = true;

  @Prop()
  indeterminate: boolean = false;


  render() {
    return (
      <Host class={"look-" + this.look}>
        <div id="bar_container">
          { !this.indeterminate &&
            <div id="main_progress" class={"color-" + this.color} style={{"width": "calc( 1rem + " + (this.value.toFixed(0) + "%)")}}>
              { this.busy && 
                <div id="operating_ani_container" style={{"width": "calc( 1rem + " + (100 * 100 / this.value).toFixed(5) + "%)"}}>
                  <div id="operating_ani" class={"color-" + this.color}></div>
                </div>
              }
            </div>
          }
          { this.indeterminate &&
            <div id="operating_ani_container" style={{"width": "100%"}}>
              <div id="operating_ani" class={"color-" + this.color}></div>
            </div>
          }
        </div>
        { !this.indeterminate &&
            <div id="progress_glow" class={"color-" + this.color} style={{"width": (this.value.toFixed(0) + "%")}}></div>
        }
      </Host>
    );
    }

}
