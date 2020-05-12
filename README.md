# cityjs
Looks up a city name given geo-coordinates without using remote endpoints. This is a port of the python package [citipy](https://github.com/wingchen/citipy).

**WIP** If you're seeing this message, this project is still a work in progress.

## TODO
 - [x] Build utilities for grabbing geoname data
 - [x] Implement basic geo-coordinate lookups using kd trees as seen in citipy
 - [x] Performance improvements
 - [x] Maybe implment proper distance comparison (might not matter)
 - [ ] Create rollup configurations
 - [ ] Create separate builds for different data sets (population > 500, 5000, etc...)
 - [ ] Implement extended functionality (eg get 5 nearest cities)