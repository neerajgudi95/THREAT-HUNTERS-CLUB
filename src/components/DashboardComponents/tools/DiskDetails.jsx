import * as React from "react";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  Inject,
  PointersDirective,
  PointerDirective,
  Annotations,
  AnnotationDirective,
  AnnotationsDirective,
} from "@syncfusion/ej2-react-circulargauge";

const DiskDetails = ({ diskDetails }) => {
  return (
    <CircularGaugeComponent
      background="transparent"
      id="container1"
      width="280px"
      height="300px"
    >
      <Inject services={[Annotations]} />
      <AxesDirective>
        <AxisDirective
          startAngle={230}
          endAngle={130}
          radius="100%"
          minimum={0}
          maximum={diskDetails?.availableSpace}
          lineStyle={{ width: 30, color: "#f6f7f9" }}
          majorTicks={{ height: 0, interval: 5 }}
          minorTicks={{ height: 0 }}
          labelStyle={{
            font: { fontFamily: "inherit", size: "12px" },
            position: "Outside",
            offset: 10,
          }}
          className="dark:text-gray-200"
        >
          <PointersDirective>
            <PointerDirective
              type="RangeBar"
              color="#7edfb4"
              value={diskDetails?.remainingSpace}
              radius="120%"
              pointerWidth={28}
              className="dark:text-gray-200"
            />
            <PointerDirective
              type="Marker"
              markerShape="Rectangle"
              markerWidth={28}
              markerHeight={3}
              radius="100%"
              color="black"
              value={diskDetails?.remainingSpace}
            />
          </PointersDirective>
          {/* <RangesDirective>
                        <RangeDirective start={0} end={38} startWidth={10} endWidth={10} color="#7edfb4" radius="86%" />
                        <RangeDirective start={38} end={50} startWidth={10} endWidth={10} color="#7edfb4" radius="87%" />
                        <RangeDirective start={50} end={75} startWidth={10} endWidth={10} color="#f99d4c" radius="87%" />
                        <RangeDirective start={75} end={100} startWidth={10} endWidth={10} color="#e96920" radius="87%" />
                    </RangesDirective> */}
          <AnnotationsDirective>
            <AnnotationDirective
              content={`<div class="gaugeOneText" style="font-size:30px;font-family:inherit;">${diskDetails?.remainingSpace} gb</div>`}
              angle={5}
              zIndex="1"
              radius="-20%"
            />
          </AnnotationsDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
};
export default DiskDetails;
