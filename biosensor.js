//this class simulate living simulate 
class Biosensor
  {
     constructor(name)
     {
         // want to keep track of the hear rate 
            this.owner=name;
            this.heartRate=0;
            this.live()
       
     }

     generatRandomBetween(min ,max)
     {
        return parseInt(Math.random() * (max -min ) + min );
       
     }


    generateHearBeat()
    {
      let heartBeat=this.generatRandomBetween(90,100);
      this.heartRate=heartBeat;
      console.log('[owner]:'+ this.owner + '---- [HR] '+ this.heartRate)
    }

    live()
    {
        setInterval(()=>{this.generateHearBeat()},1000 );

    }
  }

  let Abdul= new Biosensor("Abdul")
  let Amal= new Biosensor("Amal")