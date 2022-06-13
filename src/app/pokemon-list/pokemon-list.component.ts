import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response:any)=>{
        response.results.forEach((result: { name: String; }) => {
          this.dataService.getMoreData(result.name)     
            .subscribe((uniqResponse:any)=>{
              console.log("Push", uniqResponse)
              this.pokemons.push(uniqResponse);uniqResponse
              
            });    
        });
        console.log(response)

      })
    console.log("ARRAY, POKEMONS", this.pokemons)
  }

}
function result(result: any, arg1: (String: any) => void) {
  throw new Error('Function not implemented.');
}

