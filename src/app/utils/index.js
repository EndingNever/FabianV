import { HttpClient, HttpClientModule } from '@angular/common/http';

const http = HttpClient

export default get = ()=> {
    this.http.get(`https://api.github.com/users/EndingNever/repos`);
}
console.log(get());