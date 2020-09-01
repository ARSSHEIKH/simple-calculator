package com.example.simplecalculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText input_value;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        input_value = (EditText) findViewById(R.id.txt1);
    }
    public void onClick1(View view)
    {
        input_value.setText("1");
    }
    public void onClick2(View view)
    {
        input_value.setText("2");
    }
    public void onClick3(View view)
    {
        input_value.setText("3");
    }
    public void onClick4(View view)
    {
        input_value.setText("4");
    }
    public void onClick5(View view)
    {
        input_value.setText("5");
    }
    public void onClick6(View view)
    {
        input_value.setText("6");
    }
    public void onClick7(View view)
    {
        input_value.setText("7");
    }
    public void onClick8(View view)
    {
        input_value.setText("8");
    }
    public void onClick9(View view)
    {
        input_value.setText("9");
    }public void onClick0(View view)
    {
        input_value.setText("0");
    }


}