'use strict';
describe('List Model', function() {

  describe('Instance Properties', function() {

    var list;
    beforeEach(function() {
      emptyArr(List.all); // for deleting instances between tests
      list = new List('Jon\'s List');
    });
    describe('Properties from initialization', function() {
      it('should have a title when a new List is created', function() {
        expect(list.title).toBe('Jon\'s List');
      });

      it('should be assigned an autoincrementing id when a new List is created', function() {
        var secondList = new List('Tristan\'s List');
        expect(list.id).toBe(0);
        expect(secondList.id).toBe(1);
      });    

      it('should be assigned an empty array when a new List is created', function() {
        expect(list.tasks).toEqual([]);
      });      
    }); // end Properties from Intialization

    describe('creating new list elements', function() {
      var anotherList;
      beforeEach(function() {
        anotherList = new List('Tristan\'s List');
      });

      it('the listEl method should create a string representing the lists\'s div', function() {
        var expectedString1 = '<div class="list"><h2><button class="destroy-list">x</button> Jon\'s List</h2><ul id="list-0" data-id="0"></ul></div>',
            expectedString2 = '<div class="list"><h2><button class="destroy-list">x</button> Tristan\'s List</h2><ul id="list-1" data-id="1"></ul></div>';
        expect(list.listEl()).toEqual(expectedString1);
        expect(anotherList.listEl()).toEqual(expectedString2);
      });

      it('the optionEl method should create a string representing the lists\'s option', function() {
        var expectedString1 = '<option value="0">Jon\'s List</option>',
            expectedString2 = '<option value="1">Tristan\'s List</option>';
        expect(list.optionEl()).toEqual(expectedString1);
        expect(anotherList.optionEl()).toEqual(expectedString2);
      });

      it('the build method should append the div and option strings the lists section and select elements', function() {
        setFixtures('<select id="select_list" name="select_list"></select><section id="lists"></section>');
        list.build();
        anotherList.build();
        expect($('#select_list option').length).toEqual(2);
        expect($('#lists div.list').length).toEqual(2);
      });
    }); // end creating new list elements

  }); //Instance Properties

  describe('Constructor Properties', function() {

    beforeEach(function() {
      emptyArr(List.all); // for deleting instances between tests
    });

    it('should have an "all" property to hold instances of each list created', function() {
      expect(List.all).toEqual([]);
    });

    it('should keep track of all instances in an all property', function() {
      var list1 = new List('Jon\'s List'),
          list2 = new List('Tristans\'s List');
      expect(List.all[0]).toBe(list1);
      expect(List.all[1]).toBe(list2);
    });

  }); //end Constructor Properties

}); //end List Model tests