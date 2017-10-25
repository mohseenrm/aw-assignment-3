from rake_nltk import Rake

def main():
	print 'starting...'

	sample = '''
		in a class i can have as many constructors as i want with different argument types. i made all the constructors as private it didn't give any error because my implicit default constructor was public but when i declared my implicit default constructor as private then its showing an error while extending the class.  why?       this works fine         this can not be inherited       ,"public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;        }      demo4(string name) {         this.name=name;     }      demo4() {         this(\""unknown\""  20);         this.sal=2000;     }      void show(){         system.out.println(\""name\""+name);         system.out.println(\""age: \""+age);     } }  public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;     }      demo4(string name) {         this.name=name;     }      private demo4() {         this(\""unknown\""  20);         this.sal=2000;     }      void show() {         system.out.println(\""name\""+name);         system.out.println(\""age: \""+age);     } }  
	'''
	rake = Rake()
	rake.extract_keywords_from_text(sample)
	print rake.get_ranked_phrases()

if __name__ == '__main__':
	main()