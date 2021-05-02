// 社会主义核心价值观 自动展示

const ClickerSettings = {
    Color:"#FF0000",
    Font:"20px 宋体",
    Time:1000
}

var Clicker = {} as any;

Clicker.ClickerFunction = ((ev:MouseEvent|any)=>{

    if(ev.path[0].localName != "div" || ev.path[0].localName != "body" || ev.path[0].localName != "html"){
        return;
    }

    var GA = 1;
    var Text = Clicker.CountGroup[Clicker.Count];

    var Canvas = window.document.createElement("canvas");
    Canvas.style.backgroundColor = "transparent";
    Canvas.width = 100;
    Canvas.height = 100;
    var Context = Canvas.getContext("2d");
    Context.fillStyle = ClickerSettings.Color;
    Context.font = ClickerSettings.Font;
    Context.fillText(Text,0,20);
    window.document.body.append(Canvas);
    Canvas.style.position = "fixed";
    Canvas.style.top = ev.y.toString();
    Canvas.style.left = ev.x.toString();

    Clicker.Count = Clicker.Count + 1;
    if(Clicker.Count == 12){
        Clicker.Count = 0;
    }

    setInterval(()=>{
        Context.clearRect(0,0,100,100);
        GA = GA - 0.01;
        Context.globalAlpha = GA;
        Context.fillText(Text,0,20);
    },ClickerSettings.Time / 100)

    setTimeout(()=>{
        Canvas.remove()
    },ClickerSettings.Time)
});

Clicker.Count = 0;
Clicker.CountGroup = ["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"]
window.addEventListener("click",Clicker.ClickerFunction);
