interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log('WeatherStation: new temperature measurement: ' + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
  
  public registerObserver(o: Observer) {
    this.observers.push(o);
  }
  public removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  public notifyObservers() {
    for(let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDsiaplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  
  public update(temperature: number) {
    console.log('TemperatureDisplay: I need to update my display');
    // Logic would go here.
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  
  public update(temperature: number) {
    if(temperature > 25) {
      console.log('Fan: its hot here, turing myself on...');
      // Here some real logic
    } else {
      console.log('Fan: its nice and cool, turing myself off...');
      // Here should come some real logic.
    }
  }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDsiaplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);