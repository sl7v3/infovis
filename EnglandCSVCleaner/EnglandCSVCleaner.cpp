/**
* @author Sulaimon Lasisi  */

#include <fstream>
#include <iostream>
#include <cstdlib>
using namespace std;

int main()
{
	char next_symbol;
	ofstream outFile;
	ifstream inFile;
	char* input_file = "Enter input file here";
	char* output_file = "Enter output file here";
	inFile.open(input_file);
	if (inFile.fail())
	{
		cerr << "Could not open the input file " << input_file << endl;
		exit(1);
	}
	outFile.open(output_file);
	if (outFile.fail())
	{
		cerr << "Could not open the output file " << output_file << endl;
		exit(1);
	}
	inFile.get(next_symbol);
	while (!inFile.eof())
	{
		if (next_symbol == '\"')
			inFile.get(next_symbol);
		else {
			outFile << next_symbol;
			inFile.get(next_symbol);
		}
	}
	outFile.close();
	inFile.close();


	system("pause");
	return 0;
} 